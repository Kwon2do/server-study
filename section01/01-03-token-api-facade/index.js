const checkPhoneNumber = (accessToken) => {
  if (accessToken.length !== 10 && accessToken.length !== 11) {
    console.log("휴대폰 번호를 정확히 입력해주세요.");
    return false;
  }
  return true;
};
const getToken = () => {
  const token = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return token;
};

const sendToken = (accessToken, token) => {
  console.log(`${accessToken} 번호로 인증번호 ${token}을 전송합니다.`);
};

/* Main */
const createToken = (accessToken) => {
  //1. 휴대폰 번호 자릿수 확인(10~11자리)
  const isValid = checkPhoneNumber(accessToken);
  if (!isValid) {
    return;
  }
  //2. 핸드폰 토큰 6자리 만들기
  const token = getToken();
  //3. 핸드폰번호에 토큰 전송하기
  sendToken(accessToken, token);
};
createToken("01012345678");
