import "./App.css";
import "./BoardWrite.css";
import { Link } from "react-router-dom";

function BoardWrite() {
  return (
    <div className="boardwrite">
      <div className="title_write">
        <span className="a">제목 </span>
        <input className="title_writeInput" type="text" />
      </div>
      <div className="maintext_write">
        <span className="b">본문 </span>
        <input className="maintext_writeInput" type="text" />
      </div>

      <Link to="/board">
        <div className="uButton">
          <button>업로드</button>
        </div>
      </Link>
    </div>
  );
}

export default BoardWrite;
