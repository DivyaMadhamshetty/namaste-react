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
import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" },
//        React.createElement("div", { id: "child1" },
//        [React.createElement("h1", {}, "I am an H1 tags"),
//        React.createElement("h2", {}, "I am an H2 tagsss")]),
//        React.createElement("div", { id: "child2" },
//        [React.createElement("h1", {}, "I am an H1 tag"),
//        React.createElement("h2", {}, "I am an H2 tag")]));

// console.log(parent);
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
// reactRoot.render(parent);

// Creating a react element
// {} Object is where we use to write/give attributes like id, classes and all
// const reactHeading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!")

// console.log(reactHeading) // creates a javascript object

// Creating a root in reactDOM
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"))

// Rendering the heading or Element
// reactRoot.render(reactHeading); // takes react element/object and renders the h1 element .React object turns into HTML element(browser understands)

// React.createElement => ReactElement-Js Object => HTMLElement(render)
// const heading = React.createElement("h1",{id:"heading"},"Namaste React in Divya's folder");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX => HTML like syntax or XML like syntax
//JSX => (transpiled befote it reaches the JS engine) - PARCEL(transpiles) - BABEL(transpilation is done by babel and jsx is converted to react code before render)
//JSX => Babel transpiles in to React.createElement => ReactElement-Js Object => HTMLElement(render)

// React Element
// const jsxHeadingElement = (
//   <h1 className="head" tabIndex="1">
//     Namaste React in Divya's folder in JSX Element
//   </h1>
// );

// React Functional Component
// const HeadingComponent = () =>{
//   return <h1>Namaste React from Functional Component</h1>
// }

// const JsxHeading = () => (
//   <h1 className="head" tabIndex="1">
//     Namaste React in Divya's folder in JSX
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {12333}
//     {jsxHeadingElement}
//     {JsxHeading()}
//     <JsxHeading />
//     <JsxHeading></JsxHeading>
//     <h1 className="heading">Namaste React from Functional Component</h1>
//   </div>
// );
// Rendering component
// root.render(<HeadingComponent />);

// The above two syntaxes are same , if we use return or not

// If we want to write JSX code in multiple lines we need to wrap in paranthesis()
// root.render(JsxHeading); -> Rendering element
// Rendering component
// root.render(<HeadingComponent />);
// root.render(header);

/* Create Nested header element using  React.createElement(h1,h2,h3,inside a div with a class "title") */
// const header = React.createElement("div",{class:"title"},
//    [React.createElement("h1",{},"It is a h1 tag"),
//    React.createElement("h2",{},"It is a h2 tag"),
//    React.createElement("h3",{},"It is a h3 tag")]
// )
// root.render(header);

/* Create Nested header element using  JSX(h1,h2,h3,inside a div with a class "title") */
// const header = (<div className="title">
//   <h1>It is a h1 tag</h1>
//   <h2>It is a h2 tag</h2>
//   <h3>It is a h3 tag</h3>
// </div>)
// root.render(header);

/* Create Nested header element using  React Functional Component(h1,h2,h3,inside a div with a class "title") */
// const Header = () => (
//   <div className="title">
//     <h1>It is a h1 tag</h1>
//     <h2>It is a h2 tag</h2>
//     <h3>It is a h3 tag</h3>
//   </div>
// );
// root.render(<Header />);

/* Create Nested header element using  React Functional Component and pass attributes in a tag in JSX(h1,h2,h3,inside a div with a class "title") */
// const Header = () => (
//   <div className="title">
//     <h1 id="heading">It is a h1 tag</h1>
//     <h2 className="title">It is a h2 tag</h2>
//     <h3 style={{color:"blue"}}>It is a h3 tag</h3>
//   </div>
// );
// root.render(<Header />);

/* Composition of a component */
// const HeaderComponent = () => (
//   <div className="title">
//     <h1 style={{color:"coral"}}>Component Composition</h1>
//   </div>
// );
// const Header = () => (
//   <div className="title">
//     <h1 id="heading">It is a h1 tag</h1>
//     <HeaderComponent />
//     <h2 className="title">It is a h2 tag</h2>
//     <h3 style={{color:"blue"}}>It is a h3 tag</h3>
//   </div>
// );
// root.render(<Header />);

/* {HeaderComponent} vs <HeaderComponent /> vs <HeaderComponent></HeaderComponent/> */
// const HeaderComponent = () => (
//   <div className="title">
//     <h1 style={{color:"coral"}}>Component Composition</h1>
//   </div>
// );
// const Header = () => (
//   <div className="title">
//     <h1 id="heading">It is a h1 tag</h1>
//     {HeaderComponent()}
//     <HeaderComponent />
//     <HeaderComponent></HeaderComponent>
//     <h2 className="title">It is a h2 tag</h2>
//     <h3 style={{color:"blue"}}>It is a h3 tag</h3>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);

/* Create a header component from scratch using Functional components in JSX */

const Logo = () => (
  <img
    className="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwfmYeiP5zLD9dxbSy7BwYvA6wpKH3a6Pahzj2iZWGlmzDl6w_UcgbazYwnr5TxofL9k&usqp=CAU"
    alt="Logo"
  ></img>
);

const SearchBar = () => (
  <input type="search" className="searchBar" placeholder="Search"></input>
);

const UserIcon = () => (
  <img
    className="userIcon"
    src="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp"
    alt="userIcon"
  ></img>
);

const Header = () => (
  <div className="container">
    <div className="subContainer">
      <Logo />
      <SearchBar />
    </div>
    <div className="lastContainer">
      <UserIcon />
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
