import Welcome from "../Welcome";
import Features from "../Features";

export default function HomePart() {
  return (
    <>
      <Welcome />
      <p>{sessionStorage.getItem("userInformation")}</p>
      <Features />
    </>
  );
}
