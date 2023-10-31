import React from "react";
import * as ReactDOMClient from "react-dom/client";

const txt = "Hello world!";
const style = "text";
const clickInput = () => {
  console.log("Click");
};
// const input = (
//   <input placeholder={txt} className={style} onClick={clickInput} />
// );

const elem = ReactDOMClient.createRoot(document.getElementById("root"));

//elem.render(input);

// создание компонента

const Text = () => <p className="paragraph">My first steps in React</p>;

const App = () => (
  <div className="block">
    <input placeholder={txt} className={style} onClick={clickInput} />;
    <Text />
  </div>
);

elem.render(<App />);
