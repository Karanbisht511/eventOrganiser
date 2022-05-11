import "./RightBar.css";
import photo from "./bro.png";

export default function RightBar() {
  return (
    <div className="photo">
      <div className="image-background">
        <img src={photo} alt="photo" />
      </div>
    </div>
  );
}
