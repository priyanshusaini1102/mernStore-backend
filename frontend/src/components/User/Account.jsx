import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector((state)=> state.userState);

    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/login");
        }
    },[isAuthenticated,navigate])

  return <div>
      Account Page
  </div>
};

export default Account;
