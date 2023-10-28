import "../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="btns">
        <Link className="link" to={"/text"}>
          <button className="glossy-button">Text Generation</button>
        </Link>
        <Link className="link" to={"/summarization"}>
          <button className="glossy-button">PDF Summarization</button>
        </Link>
        <Link className="link" to={"/emotions"}>
          <button className="glossy-button">Emotion Recognition</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
