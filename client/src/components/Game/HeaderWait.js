/* eslint-disable */
import { removeCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import LogoutAlert from '../Common/LogoutAlert';
import Badge from "@mui/material/Badge";
import axios from "axios";

const HeaderWait = () => {
  const navigate = useNavigate();
  const access = getCookie("access");

  // 모달 상태를 관리하기 위한 state 추가
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const checkLogin = async () => {
    try {
      const response = await axios.post(
        "/member/logout",
        {
          email: getCookie("email"),
          accessToken: access,
        },
        {
          headers: {
            Authorization: "Bearer " + access,
          },
        }
      );
      if (response.status === 200) {
        console.log("로그아웃 성공");
        removeCookie("access");
        removeCookie("refresh");
        removeCookie("email");
      } else {
        window.confirm("로그아웃 실패.");
      }
    } catch (error) {
      console.log(error);
      window.confirm("로그아웃 통신 오류발생.");
    }
  };

  const GoMain = () => {
    navigate("/");
  };

  const headerStyle = {
    height: "12vh",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    height: "25vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const imgStyle = {
    height: "40%",
    color: "white",
  };

  const loginStyle = {
    marginRight: "5vw",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle} onClick={GoMain}>
        <img src="images/GameImage/HeaderLogo.png" style={imgStyle} alt="Logo"></img>
      </div>
      <div style={{ fontFamily: 'Pretendard-Regular', fontWeight: "bold", fontSize: "20px" }}>
        <Badge color="error" variant="dot" style={{ marginRight: "30px" }}>
          <NotificationsIcon />
        </Badge>
        <Link style={loginStyle} onClick={() => setLogoutModalOpen(true)}>
          Logout
        </Link>
      </div>

      {/* 로그아웃 모달 */}
      <LogoutAlert
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={checkLogin}
      />
    </div>
  );
};

export default HeaderWait;