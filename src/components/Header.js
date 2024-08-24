import React from 'react';
import Netflix_Logo_PMS from '../images/Netflix_Logo_PMS.png';
import { signOut } from 'firebase/auth';

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate('/');
      })
      .catch((error) => {
        // An error happened
        navigate('/error');
      });
  };
  return (
    <div className="flex justify-between z-10 absolute w-screen bg-gradient-to-b from-black px-8 py-2">
      <img className="w-48" alt="netflix logo" src={Netflix_Logo_PMS} />
      {user && (
        <div className="flex items-center p-2">
          <img
            className="h-6 rounded-lg"
            alt="usericon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          />
          <button onClick={handleSignOut} className="text-white pl-2 font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
