/* 
<div id="parent">
  <div id="child1">
   <h1>I am an H1 tag</h1>
   <h2>I am an H2 tag</h2>
  </div>
   <div id="child2">
   <h1>I am an H1 tag</h1>
   <h2>I am an H2 tag</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" },
       React.createElement("div", { id: "child1" },
       [React.createElement("h1", {}, "I am an H1 tag"),
       React.createElement("h2", {}, "I am an H2 tag")]),
       React.createElement("div", { id: "child2" },
       [React.createElement("h1", {}, "I am an H1 tag"),
       React.createElement("h2", {}, "I am an H2 tag")]));

console.log(parent);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(parent)

// Creating a react element
// {} Object is where we use to write/give attributes like id, classes and all
// const reactHeading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!")

// console.log(reactHeading) // creates a javascript object

// // Creating a root in reactDOM
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"))

// // Rendering the heading or Element
// reactRoot.render(reactHeading); // takes react element/object and renders the h1 element .React object turns into HTML element(browser understands)