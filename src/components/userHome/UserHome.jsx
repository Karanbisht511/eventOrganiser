import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import "./UserHome.css";
import Header from "./Header";
import HomePart from "./HomePart";
import Footer from "../Footer";

import InvitationHome from "../invitation/InvitationHome";
import WeddingResortsHome from "../weddingResorts/WeddingResortsHome";
import PhotoVideoPortalHome from "../photographer/videographer/photo/PhotoVideoHome";
import DecoratorHome from "../decorator/DecoratorHome";
import Explore from "../explore/Explore";
import Dashboard from "../dashboard/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function UserHome() {
  const [userInformation, setUserInformation] = useState(false);
  const { id } = useParams();
  console.log("id:", id);

  const getData = async () => {
    const receivedData = await Axios.get("http://localhost:4000/getUserInfo/", {
      params: { userId: id },
    })
      .then((response) => {
        console.log("response:", response);
        return response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
    await setUserInformation(receivedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="Home">
        <Header />

        <Routes>
          <Route path="/" element={<HomePart />} />
          {/* <Route path="/loggedIn" element={<HomePart />} /> */}
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/invitationTemplates" element={<InvitationHome />} />
          <Route path="/weddingResorts" element={<WeddingResortsHome />} />
          <Route path="/photoVideoPortal" element={<PhotoVideoPortalHome />} />
          <Route path="/decorators" element={<DecoratorHome />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
