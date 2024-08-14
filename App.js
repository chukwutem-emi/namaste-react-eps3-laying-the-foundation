import React from "react";
import ReactDOM from "react-dom/client";

// React element
// React.createElement  =>ReactElement-JS object(it is an object and not html dom). when we render it, it converts the object to htmlElement and push it to the html - dom.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste react 🚀"
);

console.log(heading);

// JSX - HTML-like or XML-like syntax and not HTML or XML.
// JSX (transpiled before it reaches the JS) - PARCEL - Babel.
// JSX =>Babel transpile it to React.createElement => ReactElement => HTMLElement(render).

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);
// root.render(jsxHeading);
// root.render(heading)




// React component
// class based components
// functional components

// React functional components
const Title = () => (<h1 id="heading">Namaste React using JSX 🚀</h1>);
// const HeadingComponent = () => {
//     return <h1>Namaste React functional component</h1>
// };
// The same thing with this:
// To render my title component inside my HeadingComponent, (this process is called component composition). i will do it like this:
const HeadingComponent = () => (
<div id="container">
    <Title />
    <h1>Namaste React functional component</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// How to render React component:
root.render(<HeadingComponent />);
