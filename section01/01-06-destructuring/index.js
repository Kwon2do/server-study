/* 구조분해할당 예제
const profile = {
  name: "철수",
  age: 10,
  school: "다람쥐초등학교",
};
const { name, school } = profile;

console.log(name, school);
*/

/*
1. 일반변수 전달하기
function testFunction(params) { // *const params = "사과"가 수행된 것
  console.log(params);
}
testFunction("사과");
*/
/*
2. 객체 전달하기
function testFunction(params) { // const params = paramsProfile
  console.log(params);
}
const paramsProfile = { name: "철수", age: 10, school: "다람쥐초등학교" };
testFunction(paramsProfile);
*/

//3. 구조분해할당 방식으로 전달하기
function testFunction({ name, age, school }) {
  console.log(name, age, school);
}
const name = "철수";
const age = 10;
const school = "다람쥐초등학교";
//shorthand property 사용해서 객체를 params에 전달
testFunction({ name, age, school });
//전달받는 함수에서는 구조분해할당 사용해서 변수에 저장
