import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement("h1", {id:"heading"} , "Welcome to the world of react")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)