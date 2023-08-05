/* eslint-disable */
import React, { useEffect } from "react";
import { Button, Card, Container, Grid, Link as MuiLink } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleReady, fetchToken } from "../../store";
import Header from "../../components/Game/Header_light";
import Next from "../../components/Game/NextToPlay";
import Webcam from "../../components/Game/Webcam";
import axios from "axios";
import { getCookie } from "../../utils/cookie";
import { userInfo } from "../../apis/userInfo";

function GameWait() {
  const { gameSeq } = useParams(); // URL에서 gameSeq 파라미터를 가져옵니다.
  const navigate = useNavigate(); // React Router의 useNavigate hook을 사용하여 페이지 이동을 수행합니다.
  const dispatch = useDispatch(); // Redux의 dispatch 함수를 가져옵니다.

  const token = useSelector((state) => state.session.token); // Redux의 상태에서 세션 토큰을 가져옵니다.

  const [isInviteFriendModalOpen, setInviteFriendModalOpen] =
    React.useState(false); // 친구 초대 모달 상태를 관리하는 상태 변수를 생성합니다.

  const handleOpenInviteFriendModal = () => {
    setInviteFriendModalOpen(true); // 친구 초대 모달을 열기 위한 핸들러 함수입니다.
  };

  const handleCloseInviteFriendModal = () => {
    setInviteFriendModalOpen(false); // 친구 초대 모달을 닫기 위한 핸들러 함수입니다.
  };

  let isReady = useSelector((state) => state.GameWait_Ready); // Redux의 상태에서 플레이어의 준비 상태를 가져옵니다.

  const handleToggleReady = (playerId) => {
    dispatch(toggleReady(playerId)); // Redux의 toggleReady 액션을 호출하여 플레이어의 준비 상태를 변경합니다.
  };

  //로그인 상태 확인
  // const [isLogin, setIsLogin] = useState(false);
  let user_seq = 6; // ssafy 토큰
  try {
    userInfo()
      .then((res) => {
        console.log("성공 seq: " + res.data.user_seq);
        if (res.status === 200) {
          console.log(res.data.user_seq);
          user_seq = res.data.user_seq;
        } else {
          console.log(1);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("실패 seq: " + user_seq);
        window.alert("로그인을 해주세요!");
        navigate("/");
      });
  } catch (error) {
    console.log("뭐지: " + error);
  }

  useEffect(() => {
    if (gameSeq) {
      dispatch(fetchToken(gameSeq)); // 컴포넌트가 마운트되고 gameSeq가 있을 때 fetchToken 액션을 호출하여 토큰을 가져옵니다.
    }
  }, [dispatch, gameSeq]);

  // 세션 토큰 추출 함수
  const extractToken = (connectionId) => {
    const match = connectionId.match(/tok_([A-Za-z0-9]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    if (token) {
      const extractedToken = extractToken(token);
      axios
        .put(
          "/lobby/enter",
          {
            userSeq: user_seq,
            connectionId: extractedToken, // 저장할 연결 토큰
          },
          {
            headers: {
              Authorization: "Bearer " + getCookie("access"), // 사용자 인증 토큰을 헤더에 넣어서 보냅니다.
            },
          }
        )
        .then((response) => {
          // 저장 성공 시의 처리를 추가할 수 있습니다.
          console.log("DB저장 커넥션 토큰" + extractedToken);
          console.log("연결 토큰이 사용자 DB에 저장되었습니다.");
        })
        .catch((error) => {
          // 저장 실패 시의 처리를 추가할 수 있습니다.
          console.log("실패 커넥션 토큰" + extractedToken);
          console.error("연결 토큰 저장에 실패했습니다.", error);
        });
    }
  }, [token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('/images/Game_Waiting.jpg')",
      }}
    >
      <Header /> {/* 게임 대기 화면 상단에 헤더를 렌더링합니다. */}
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Grid container spacing={3} justifyContent="space-between">
              <Grid item xs>
                <Next /> {/* 다음 게임으로 이동하는 버튼을 렌더링합니다. */}
              </Grid>
            </Grid>
            <div>
              {/* Top */}
              <Grid>
                <Card
                  style={{
                    width: "90%",
                    height: "50vh",
                    margin: "1%",
                  }}
                >
                  대기중 음악 비디오
                  {/* 대기 중인 음악 비디오를 렌더링합니다. */}
                </Card>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    bottom: "2%",
                    right: "2%",
                  }}
                >
                  <Button variant="contained" color="primary" className="mb-2">
                    채팅
                    {/* 채팅 버튼을 렌더링합니다. */}
                  </Button>
                  <Button
                    variant={isReady.player1 ? "warning" : "success"}
                    onClick={() => handleToggleReady("player1")}
                    className="mb-2"
                  >
                    {isReady.player1 ? "Ready" : "준비하자!"}
                    {/* 플레이어 1의 준비 상태에 따라 준비 버튼의 텍스트를 변경합니다. */}
                  </Button>
                  <MuiLink to="/GameList" component={Link}>
                    <Button variant="contained" color="secondary">
                      나가기
                      {/* 게임 대기 화면에서 나가기 버튼을 렌더링합니다. */}
                    </Button>
                  </MuiLink>
                </div>
              </Grid>
              {/* Bottom */}
              <Grid container>
                <Grid item xs>
                  <Webcam token={token} playerId="player1" />
                  {/* 플레이어 1의 웹캠 스트림을 렌더링합니다. */}
                </Grid>
                <Grid item xs>
                  <Webcam token={token} playerId="player2" />
                  {/* 플레이어 2의 웹캠 스트림을 렌더링합니다. */}
                </Grid>
                <Grid item xs>
                  <Webcam token={token} playerId="player3" />
                  {/* 플레이어 3의 웹캠 스트림을 렌더링합니다. */}
                </Grid>
                <Grid item xs>
                  <Webcam token={token} playerId="player4" />
                  {/* 플레이어 4의 웹캠 스트림을 렌더링합니다. */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default GameWait;
