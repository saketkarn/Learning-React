import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id:"heading"} , "Welcome to the world of react")
const Title =() => <h1>This is my main title</h1>
const Heading = () => 
    <div>
        <Title/>
        <h1 id="heading"> 
            Welcome to the world of react 
            <h2>{200+300}</h2>
            // We can write any JS code inside Functional Component inside the { }
        </h1>
        </div>  //Component-Composition //Component Title is rendered inside the component Heading
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(<Heading/>)