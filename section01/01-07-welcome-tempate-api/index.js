const checkEmail = (email) => {
  if (!email || !email.includes("@"))
    throw new Error("이메일이 정상이 아닙니다.");
  else return true;
};
const getWelcomeTemplate = ({ name, age, school, createAt }) => {
  const welcomeTemplate = ` 
  <html>
        <body>
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr />
          <div>나이: ${age}</div>
          <div>학교: ${school}</div>
          <div>가입일: ${createAt}</div>
        </body>
    </html>
    `;
  return welcomeTemplate;
};
const sendTemplateToEmail = ({ email, welcomeTemplate }) => {
  console.log(`${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송합니다.`);
};
const createUser = ({ name, age, school, email, createAt }) => {
  // 1. 이메일이 정상인지 확인(존재여부, @포함여부)
  const isEmail = checkEmail(email);
  if (!isEmail) return;
  // 2. 가입환영 템플릿 작성
  const welcomeTemplate = getWelcomeTemplate({
    name,
    age,
    school,
    createAt,
  });
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail({ email, welcomeTemplate });
};
const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "test@test.com";
const createAt = "2024.12.20";
createUser({ name, age, school, email, createAt });
