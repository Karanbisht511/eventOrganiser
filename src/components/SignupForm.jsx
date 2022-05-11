import React from "react";
import "./SignupForm.css";
import { useForm } from "react-hook-form";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import Axios from "axios";

export default function LoginForm({ isShowSignupForm, handleSignupClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const receivedData = await Axios.post("http://localhost:4000/signup", {
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      pincode: data.pincode,
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
    console.log("receivedData:", receivedData);
    console.log(data);
  };

  const handleOutsideClick = () => {
    handleSignupClick();
  };

  return (
    <div className={`show ${isShowSignupForm ? "active" : ""}`}>
      <OutsideClickHandler
        onOutsideClick={!isShowSignupForm && handleOutsideClick}
      >
        <div className="signup-form">
          <h1>Signup Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="FirstName"
              {...register("firstName", { required: true })}
            />
            {errors?.firstName?.type === "required" && (
              <p>this field is required</p>
            )}
            <input
              type="text"
              placeholder="LastName"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <p>this field is required</p>
            )}
            <br></br>
            <input
              type="number"
              placeholder="Mobile"
              {...register("mobile", {
                required: true,
                valueAsNumber: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors?.mobile?.type === "required" && (
              <p>this field is required</p>
            )}
            {(errors?.mobile?.type === "minLength" ||
              errors?.mobile?.type === "maxLength") && (
              <p>mobile number should be of 10 digits</p>
            )}
            <input
              type="number"
              placeholder="Pin-code"
              {...register("pincode", {
                required: true,
                valueAsNumber: true,
                minLength: 6,
                maxLength: 6,
              })}
            />
            {errors?.pincode?.type === "required" && (
              <p>this field is required</p>
            )}
            {(errors?.pincode?.type === "minLength" ||
              errors?.pincode?.type === "maxLength") && (
              <>pincode should be of 6 digits</>
            )}
            <br></br>
            <input type="email" placeholder="E-mail" {...register("email")} />
            {errors?.email?.type === "required" && (
              <p>this field is required</p>
            )}
            <br></br>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors?.password?.type === "required" && (
              <p>this field is required</p>
            )}
            <br></br>
            <input
              id="confirm-password"
              type="password"
              placeholder="confirm-Password"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword?.type === "required" && (
              <p>this field is required</p>
            )}
            <br></br>
            <input type="submit" value="Save" />
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
