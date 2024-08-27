import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateEmailAndPassword } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = (e) => {
    e.preventDefault(); // Prevents form submission
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      {/* background image */}
      <div className="absolute w-full h-full ">
        <img
          className="w-full h-full object-cover opacity-95"
          alt="background"
          src={BG_URL}
        />
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute pt-40 px-14 md:p-10 text-white bg-black bg-opacity-80 sm:w-full md:w-6/12 lg:w-3/12 md:my-36 mx-auto right-0 left-0 rounded-lg h-full md:h-fit lg:h-fit"
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="w-full p-3 rounded-lg bg-slate-800 text-white"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="w-full mt-4 p-3 rounded-lg bg-slate-800 text-white"
          type="password"
          placeholder="Password"
        />
        {errorMessage && (
          <p className="pt-4 font-bold text-base text-red-700">
            {errorMessage}
          </p>
        )}
        <button
          onClick={handleButtonClick}
          className="w-full bg-red-600 hover:bg-red-700 my-8 py-3 text-xl rounded-lg"
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        {isSignInForm ? (
          <div className="flex mb-2">
            <p>New to Netflix ?</p>
            <button onClick={toggleSignInForm} className="ml-2 underline">
              Sign up now
            </button>
          </div>
        ) : (
          <div className="flex mb-2">
            <p>Already registered ?</p>
            <button onClick={toggleSignInForm} className="ml-2 underline">
              Sign in now
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
