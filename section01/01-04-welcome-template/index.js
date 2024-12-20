const getWelcomeTemplate = (user) => {
  return `
    <html>
      <body>
        <h1>${user.name}님 가입을 환영합니다.</h1>
        <hr />
        <div>나이: ${user.age}</div>
        <div>학교: ${user.school}</div>
      </body>
    </html>
  `;
};

console.log(
  getWelcomeTemplate({ name: "철수", age: 10, school: "다람쥐초등학교" })
);
