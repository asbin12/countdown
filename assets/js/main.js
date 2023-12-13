const inputs = document.querySelectorAll("input");

const clock = () => {
  const christmasDay = "2023-12-25 12:00 AM";
  const endDate = new Date(christmasDay);
  const nowDate = new Date();
  const diffSecond = (endDate - nowDate) / 1000;
  inputs[0].value = Math.floor(diffSecond / 3600 / 24);
  inputs[1].value = Math.floor(diffSecond / 3600) % 24;
  inputs[2].value = Math.floor(diffSecond / 60) % 60;
  inputs[3].value = Math.floor(diffSecond) % 60;
  // console.log(diffSecond);
  // console.log(Math.floor(diffSecond / 3600 / 24));
};

clock();

setInterval(() => {
  clock();
}, 1000);
