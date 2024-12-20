const getToken = () => {
  const token = Math.floor(Math.random() * 1000000);
  return String(token).padStart(6, "0");
};

console.log(getToken());
