const testFunction = (params) => {
  console.log(params);
};

const name = "철수";
const age = 10;
const school = "다람쥐초등학교";

/* 
const profile = {
 name,
 age,
 school,
};
console.log(profile);
*/

// key와 value가 같으면 생략 가능 => shorthand property
const profile = { name, age, school };

// 방법1. 변수에 담아서 전달
testFunction(profile);

// 방법2. 바로 전달
testFunction({ name, age, school });

// * 결과는 같다.
