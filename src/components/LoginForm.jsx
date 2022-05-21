import React, { useState } from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({
  isShowLoginForm,
  handleLoginClick,
  handleSignupClick,
}) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  // const currentLink = window.location.href;
  const onSubmit = async (data) => {
    const receivedData = await Axios.get("http://localhost:4000/login", {
      params: {
        email: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        console.log(response);
        // console.log("response:", response);
        return response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
    console.log("receivedData:", receivedData);

    await setUserInfo(receivedData);

    handleSubmitButton(receivedData);
  };

  const handleSubmitButton = (id) => {
    handleLoginClick();
    navigate(`/loggedIn/${id}`);
    // console.log("userInfo:", userInfo);
  };

  const handleOutsideClick = () => {
    handleLoginClick();
  };

  return (
    <div className={`${isShowLoginForm ? "active" : ""} show`}>
      <OutsideClickHandler
        onOutsideClick={!isShowLoginForm && handleOutsideClick}
      >
        <div className=" login-form">
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
            <br></br>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            <br></br>
            <a href="#">forgot password?</a>
            <br></br>

            {/* <Link to="/dashboard"> */}
            <input type="submit" value="Login" />
            {/* </Link> */}

            <input type="button" value="Signup" onClick={handleSignupClick} />
          </form>
        </div>
      </OutsideClickHandler>
      {/* {useInfo && window.location.assign(`${currentLink}loggedIn`)} */}
    </div>
  );
}
