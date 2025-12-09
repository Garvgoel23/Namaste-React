import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "i am an h1 tag"),
    React.createElement("h2", { key: "h2" }, "i am an h2 tag"),
  ])
);

/**  const heading = React.createElement(
        "h1",
         {id: "heading", xyz: "abc"}, 
         "Hello world");
*/

// JSX

const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
root.render(jsxheading);
