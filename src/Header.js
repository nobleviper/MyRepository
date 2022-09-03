import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from './image/logo1.PNG'

function Header() {
  return (
    <div className="header">
      <div className="header_nav">
        <div className="header_menu">
            <Link to ="/">
            <img className="header_logo" src={logo} alt="logo1"/>
            </Link>
          <ul>
            <li className="header_SignIn"> Sign In </li>
            <li className="header_SignOut"> Sign Out </li>
            <li className="header_SignUp"> Sign Up </li>
            <li className="header_MyPage"> My Page </li>
          </ul>
        </div>

        <div className="header_nav2">
          <div class="nav_padding"></div>
          <div class="nav_menu">
            <ul>
              <li> <Link to="/" style={{ textDecoration: "none" }}> HOME </Link>
              </li>
              <li> <Link to="/Dogsearch" style={{ textDecoration: "none" }}>
                강아지 백과사전 </Link>
              </li>
              <li> <Link to="/hospital" style={{ textDecoration: "none" }}>
                동물병원 찾기 </Link>
              </li>
              <li>
                <Link to="/board" style={{ textDecoration: "none" }}>
                  게시판
                </Link>
              </li>
            </ul>
         </div>
         <div class="nav_padding"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
