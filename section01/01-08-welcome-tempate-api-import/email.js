export const checkEmail = (email) => {
  if (!email || !email.includes("@"))
    throw new Error("이메일이 정상이 아닙니다.");
  else return true;
};

export const sendTemplateToEmail = ({ email, welcomeTemplate }) => {
  console.log(`${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송합니다.`);
};
