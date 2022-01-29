import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    const {isAuthenticated, user} = useSelector((state)=> state.userState);

    const logoutHandler = () => {
        console.log("logout");
        if(user.name){

            console.log(user.avatar.url);
        }
    }

    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/login");
        }
    },[isAuthenticated,navigate])

  return <div className="rounded-3xl mx-auto  overflow-hidden shadow-lg drop-shadow-lg max-w-xs my-16 bg-red-500">
  	<img src="https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413_960_720.jpg" alt='img' className="w-full" />
    <div className="flex justify-center -mt-8">
        <img src={user.name ? user.avatar.url :`https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg`} alt='img' className="w-20 h-20 object-cover rounded-full border-solid border-white border-2 -mt-3"/>		
    </div>
	<div className="text-center px-3 pb-6 pt-2">
		<h3 className="text-white text-sm bold font-sans">{user.name}</h3>
		<p className="mt-2 font-sans font-light text-white">{user.email}</p>
	</div>
  	<div className="flex justify-center pb-3 text-white">
      <div className="text-center mr-3 border-r pr-3">
        <h2>Role</h2>
        <span>{user.role}</span>
      </div>
      <div className="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
  	</div>
      <button className='px-4 py-2  border-2 border-black text-black rounded-3xl m-3 mx-auto block hover:bg-black hover:text-white' onClick={logoutHandler}>Log out</button>
</div>
};

export default Account;
