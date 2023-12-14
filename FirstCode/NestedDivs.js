/*
    <div id ="parent">
        <div id="child">
            <h1>I'm a h1 tag</h1>
            <h2>I'm a h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm a h1 tag</h1>
            <h2>I'm a h2 tag</h2>
        </div>
    </div>

    React takes any elment as an object for the browser to understand it in simple HTML
    JSX makes life easy while creating tags
*/

const heading = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]
)])
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)