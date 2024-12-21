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
