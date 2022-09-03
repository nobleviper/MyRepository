import "./App.css";
import "./Board.css";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

function Board() {
  return (
    <div className="board">
      <div className="boardOpt">
        <thead>
          <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
          </tr>
        </thead>
      </div>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <Link to="/write">
        <div className="wbutton">
          <button>글 작성</button>
        </div>
      </Link>
    </div>
  );
}

export default Board;
