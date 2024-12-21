import { checkEmail, sendTemplateToEmail } from "./email.js";
import { getWelcomeTemplate } from "./template.js";
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
