import React from "react";
import ReactDOM from "react-dom";

const elem = document.getElementById("root");
const txt = "Hello world!";
const style = "text";
const clickInput = () => {
  console.log("Click");
};
const input = (
  <input placeholder={txt} className={style} onClick={clickInput} />
);

ReactDOM.render(input, elem);
