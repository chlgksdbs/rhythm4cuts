/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./My_JoinInfo.css";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const JoinInfo = ({ onJoinInfo, profileImgSeq }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [emailCodeStatus, setEmailCodeStatus] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(""); // 비밀번호 확인을 위한 상태 추가
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호 유효성 상태
  const [birth, setbirth] = useState("");
  const [nickname, setnickname] = useState("");
  const [nickNameStatus, setNickNameStatus] = useState(false);
  const [gender, setgender] = useState("");

  useEffect(() => {
    //이게진짜임
    const passwordRegex = new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/
    );
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  // 부모 컴포넌트에 데이터 전달
  useEffect(() => {
    if (onJoinInfo) {
      onJoinInfo({
        name,
        ssn: birth + "-" + gender,
        nickname,
        email,
        password,
        passwordConfirm,
        profile_img_seq: profileImgSeq,
        emailCodeStatus,
        isPasswordValid,
        nickNameStatus,
      });
    }
  }, [
    name,
    email,
    password,
    passwordConfirm,
    birth,
    gender,
    nickname,
    onJoinInfo,
    emailCodeStatus,
    isPasswordValid,
    nickNameStatus,
    profileImgSeq,
  ]);

  // 상태가 변경될 때마다 콜백 함수를 호출

  const genderRef = useRef(); // ref를 생성합니다.
  const nicknameRef = useRef(); // ref를 생성합니다.
  const handleBirthChange = (e) => {
    setbirth(e.target.value);
    if (e.target.value.length >= 6) {
      // 입력 값의 길이가 6 이상이면
      genderRef.current.focus(); // gender 입력 필드로 초점을 이동합니다.
    }
  };
  const handleGenderChange = (e) => {
    setgender(e.target.value);
    if (e.target.value.length >= 1) {
      // 입력 값의 길이가 6 이상이면
      nicknameRef.current.focus(); // gender 입력 필드로 초점을 이동합니다.
    }
  };

  //이메일 코드 전송
  const emailCheck = async () => {
    try {
      const response = await axios.post(
        // `http://localhost:8080/member/mail?email=${email}`
        `https://i9b109.p.ssafy.io:8443/member/mail?email=${email}`
      );
      if (response.status === 200) {
        setEmailCodeStatus(false);
        window.confirm("인증번호가 발송되었습니다.");
      }
    } catch (error) {
      console.log(error);
      window.confirm("인증번호 발송을 실패하였습니다.");
    }
  };
  //이메일 코드 인증

  const emailCodeCheck = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8080/member/mailcheck",
        `https://i9b109.p.ssafy.io:8443/member/mailcheck`,
        {
          email: email,
          certificate: emailCode,
        }
      );
      if (response.data.checked === true) {
        setEmailCodeStatus(true);
        window.confirm("인증되었습니다.");
      } else {
        setEmailCodeStatus(false);
        window.confirm("인증을 실패하였습니다.");
      }
    } catch (error) {
      console.log(error);
      window.confirm("인증을 실패하였습니다.");
    }
  };

  // 이메일 인증 이미지
  const showEmailImage = () => {
    if (emailCodeStatus) {
      return (
        <img
          src={"/images/체크.png"}
          style={{
            width: "40px",
            height: "40px",
            marginTop: "35px",
          }}
        />
      );
    } else {
      return null;
    }
  };

  //닉네임 인증
  const nickNameCheck = async () => {
    try {
      const response = await axios.get(
        // `http://localhost:8080/member/nickname?nickname=${nickname}`
        `https://i9b109.p.ssafy.io:8443/member/nickname?nickname=${nickname}`
      );
      if (response.data.duplicate === false) {
        setNickNameStatus(true);
        window.confirm("사용 가능한 닉네임입니다.");
      } else {
        setNickNameStatus(false);
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      setNickNameStatus(false);
      window.confirm("사용중인 닉네임입니다.");
    }
  };

  // 닉네임 인증 이미지
  const showNickNameImage = () => {
    if (nickNameStatus) {
      return (
        <img
          src={"/images/체크.png"}
          style={{
            width: "40px",
            height: "40px",
            marginTop: "35px",
          }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="Join-info-container">
      <div className="Join-info" style={{ width: "60vw" }}>
        <div className="Join-item">
          <span className="Join-name Join-name-topline">이름</span>
          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            style={{ marginLeft: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              // 레이블이 항상 위로 올라가 있게 한다
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
        </div>
        <div className="Join-item">
          <span className="Join-name">성별</span>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            style={{ marginLeft: "40%" }}
          >
            <FormControlLabel
              value="남자"
              control={<Radio color="primary" />}
              label="남자"
            />
            <FormControlLabel
              value="여자"
              control={<Radio color="primary" />}
              label="여자"
            />
          </RadioGroup>
        </div>
        <div className="Join-item">
          <span className="Join-name">닉네임</span>
          <TextField
            fullWidth
            value={nickname}
            onChange={(e) => {
              setnickname(e.target.value);
              setNickNameStatus(false);
            }}
            variant="outlined"
            style={{ marginLeft: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
                padding: "10px 14px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={nickNameCheck}
            style={{ width: "45%" }}
          >
            중복 확인
          </Button>
          {showNickNameImage()}
        </div>
        <div className="Join-item">
          <span className="Join-name">이메일</span>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            style={{ marginLeft: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
                padding: "10px 14px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
          <Button variant="contained" color="primary" onClick={emailCheck}>
            인증
          </Button>
        </div>
        <div className="Join-item">
          <span className="Join-name">이메일 인증</span>
          <TextField
            fullWidth
            value={emailCode}
            onChange={(e) => {
              setEmailCode(e.target.value);
              setEmailCodeStatus(false);
            }}
            variant="outlined"
            style={{ marginLeft: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
                padding: "10px 14px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={emailCodeCheck}
            style={{ width: "45%" }}
          >
            인증 확인
          </Button>
          {showEmailImage()}
        </div>
        <div className="Join-item">
          <span className="Join-name">비밀 번호</span>
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            helperText="영어, 숫자, 특수기호 포함 8자리 이상"
            style={{ marginLeft: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
                padding: "10px 14px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
          {isPasswordValid && password && (
            <img
              src={"/images/체크.png"}
              alt="Check"
              className="Join-check"
              style={{ width: "40px", height: "40px" }}
            />
          )}
          {!isPasswordValid && password && (
            <span className="Join-warning" style={{ color: "red" }}>
              <img
                src={"/images/오답.png"}
                alt="Check"
                className="Join-check password-check"
                style={{ width: "40px", height: "40px", marginRight: "-15px" }}
              />
            </span>
          )}
        </div>
        <div className="Join-item">
          <span className="Join-name">비밀 번호 확인</span>
          <TextField
            fullWidth
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            variant="outlined"
            style={{ flexBasis: "40%", height: "40px" }}
            InputProps={{
              style: {
                height: "40px",
                padding: "10px 14px",
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: "0.8rem",
                transform: "scale(1) translate(14px, 10px)",
              },
            }}
          />
          {password === passwordConfirm && passwordConfirm && (
            <img
              src={"/images/체크.png"}
              alt="Check"
              className="Join-check"
              style={{ width: "40px", height: "40px" }}
            />
          )}
          {password !== passwordConfirm && passwordConfirm && (
            <img
              src={"/images/오답.png"}
              alt="Check"
              className="Join-check"
              style={{ width: "40px", height: "40px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinInfo;
