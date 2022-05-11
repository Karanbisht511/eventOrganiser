import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function Dashboard() {
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
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <div>
        {console.log(userInformation)}
        {userInformation && (
          <h1>
            Name:{userInformation.first_name + " " + userInformation.last_name}
          </h1>
        )}
      </div>
    </>
  );
}
