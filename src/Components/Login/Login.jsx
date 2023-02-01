import React from "react";
import { useForm } from "react-hook-form";

import { useLoginStore } from "../Login/useLoginStore";
import { useNavigate } from "react-router-dom";
import appService from "../App/Appservices/AppService";

const Login = (forward) => {
  // saves useNavigate in a variable to use after login
  const navigate = useNavigate();
  // sets the custom hook with needed information
  const { setLoggedIn, loggedIn, username } = useLoginStore();

  // sets the elements for the hook form management
  const { register, handleSubmit } = useForm();
  // function that manages the login request
  const onSubmit = (submitdata) => {
    // async function using the appService to make a login request,
    // and upon success, sets the information via the custom login hook to localstorage
    const fetchResult = async () => {
      try {
        const response = await appService.Login(
          submitdata.username,
          submitdata.password
        );
        if (response.data) {
          response.data.user.user_id = response.data.user_id;
          setLoggedIn(
            true,
            response.data.username,
            response.data.access_token,
            response.data.user
          );
        }
      } catch (error) {
        console.error(error);
      }
      navigate(forward);
    };
    fetchResult();
  };
  // function to handle logout and navigate to index
  const handleLogout = () => {
    setLoggedIn(false, "", "");
    navigate("/");
  };
  return (
    <>
      {!loggedIn ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", { required: true })}
            type="text"
            autoComplete="username"
            placeholder="brugernavn"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            autoComplete="password"
            placeholder="kodeord"
          />
          <button>Login</button>
        </form>
      ) : (
        <>
          <h3>{username} er logget in</h3>
          <button onClick={() => handleLogout()}>Log ud</button>
        </>
      )}
    </>
  );
};

export default Login;
