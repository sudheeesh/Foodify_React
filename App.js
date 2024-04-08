const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id: "child1"},[
React.createElement("h1",{},"this is a ReacT App"),
React.createElement("h2",{},"this is a ReacT App"),
]),
React.createElement("div",{id: "child2"},[
React.createElement("h1",{},"this is a ReacT App"),
React.createElement("h2",{},"this is a ReacT App"),
]),
])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)