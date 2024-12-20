export const checkEmail = (email) => {
  if (!email || !email.includes("@"))
    throw new Error("이메일이 정상이 아닙니다.");
  else return true;
};
export const getWelcomeTemplate = ({ name, age, school, createAt }) => {
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
export const sendTemplateToEmail = ({ email, welcomeTemplate }) => {
  console.log(`${email}로 가입환영 템플릿 ${welcomeTemplate}을 전송합니다.`);
};
