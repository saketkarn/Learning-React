import React from "react"
import ReactDOM from "react-dom/client"

const header= React.createElement("h1",{id:"header"},"Trying the first application of React")
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(header)