import axios from "axios";
import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS
} from '../constants/userConstant';



//login
export  const login = (email,password) => async(dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST});

        const config = {headers:{"Content-Type":"application/json"}};

        const {data} = await axios.post('/api/v1/login',{email,password},config);

        dispatch({type: LOGIN_SUCCESS,payload:data.user});

    }catch(err){
        dispatch({type:LOGIN_FAIL,payload:err.response.data.message});
    }
}

//register
export const register = (userData) => async(dispatch) => {
    try{
        dispatch({type:REGISTER_USER_REQUEST});

        const config = {headers: {"Content-Type": "multipart/form-data"} };

        const { data } = await axios.post("/api/v1/register", userData, config);

        dispatch({type:REGISTER_USER_SUCCESS, payload:data.user});

    }catch(err){
        dispatch({type:REGISTER_USER_FAIL,payload:err.response.data.message});
    }
}

export  const loadUser = () => async(dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST});

        const {data} = await axios.get('/api/v1/me');
        
        dispatch({type: LOAD_USER_SUCCESS,payload:data});

    }catch(err){
        dispatch({type:LOAD_USER_FAIL,payload:err.response.data.message});
    }
}


//clearing errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type:CLEAR_ERRORS});
}