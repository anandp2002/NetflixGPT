import React, { useEffect } from 'react';
import Netflix_Logo_PMS from '../images/Netflix_Logo_PMS.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { userIcon } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened
        navigate('/error');
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    //UnSubscribe when component unmounts
    return () => unSubscribe();
  }, [navigate, dispatch]);

  return (
    <div className="flex justify-between z-10 absolute w-full sm:bg-gradient-to-b from-black px-8 py-2">
      <img className="w-48" alt="netflix logo" src={Netflix_Logo_PMS} />
      {user && (
        <div className="flex items-center p-2">
          <img className="h-6 rounded-lg" alt="usericon" src={userIcon} />
          <button onClick={handleSignOut} className="text-white pl-2 font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
