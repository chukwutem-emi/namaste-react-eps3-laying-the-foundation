import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {},"This is Namaste React 🚀"), React.createElement("h2", {},"i'm an h2 tag"),])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);