import { Link } from "react-router-dom";

export default function Dashboard() {
  console.log(sessionStorage.getItem("userInformation"));
  const userInformation = JSON.parse(sessionStorage.getItem("userInformation"));
  return (
    <>
      <h1 style={{ textAlign: "center" }}>DASHBOARD</h1>
      <div>
        <h1>User Information</h1>
        <p>
          <span>Name:</span>
          {userInformation.firstName} {userInformation.lastName}
        </p>
        <p>
          <span>Mobile:</span>
          {userInformation.mobile}
        </p>
        <p>
          <span>Email:</span>
          {userInformation.email}
        </p>
        <p>
          <span>Address:</span>
          {userInformation.address}
        </p>
        <p>
          <span>Pincode:</span>
          {userInformation.pincode}
        </p>
      </div>
      <Link to="/updateInfo">
        <button>Update Info</button>
      </Link>
    </>
  );
}
