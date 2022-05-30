import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header";
import HomePart from "./HomePart";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import InvitationHome from "./invitation/InvitationHome";
import WeddingResort from "./weddingResorts/WeddingResortsHome";
import PhotoVideoPortalHome from "./photographer/videographer/photo/PhotoVideoHome";
import DecoratorHome from "./decorator/DecoratorHome";
import Explore from "./explore/Explore";
import Dashboard from "./dashboard/Dashboard";
import UpdateUserInformation from "./dashboard/UpdateUserInformation";
// import UserHome from "./userHome/UserHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  const [isShowLoginForm, setIsShowLoginForm] = useState(true);
  const [isShowSignupForm, setIsShowSignupForm] = useState(true);
  // const [reload, setReload] = useState(false);

  const handleLoginClick = () => {
    setIsShowLoginForm((isShowLoginForm) => !isShowLoginForm);
  };

  const handleSignupClick = () => {
    setIsShowSignupForm((isShowSignupForm) => !isShowSignupForm);
  };

  // window.addEventListener("reload", () => {
  //   sessionStorage.clear();
  //   // window.location.reload();
  // });

  console.log(JSON.parse(sessionStorage.getItem("userInformation")));

  return (
    <>
      <Router>
        <div id="Home">
          <Header handleLoginClick={handleLoginClick} />

          <Routes>
            <Route path="/" element={<HomePart />} />
            {/* <Route path="/loggedIn/:id" element={<UserHome />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/updateInfo" element={<UpdateUserInformation />} />
            <Route path="/invitationTemplates" element={<InvitationHome />} />
            <Route path="/weddingResorts" element={<WeddingResort />} />
            <Route
              path="/photoVideoPortal"
              element={<PhotoVideoPortalHome />}
            />
            <Route path="/decorators" element={<DecoratorHome />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>

          <Footer />
        </div>
        <LoginForm
          isShowLoginForm={isShowLoginForm}
          handleLoginClick={handleLoginClick}
          handleSignupClick={handleSignupClick}
        />
        <SignupForm
          isShowSignupForm={isShowSignupForm}
          handleSignupClick={handleSignupClick}
        />
      </Router>
    </>
  );
}

export default Home;
