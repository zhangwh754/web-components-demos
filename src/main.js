import * as MyButton from "./components/MyButton";

const myButtons = document.querySelectorAll("my-button");

myButtons.forEach((item, index) =>
  item.addEventListener("myButtonClick", () => {
    console.log(`点击了第${index + 1}个按钮`);
  })
);
