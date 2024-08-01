import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => when we render it , it creates (HTML element)

// const heading = React.createElement("h1",{id:parent},"This is react element");

// console.log(heading); // object

// JSX - HTML- like or XML-like syntax

//JSX (transpiled before it reaches the Js) - PARCEL - Babel

//JSX=> Babel transpiles it to React.createElement=>ReactElement-JS object-HTMLElement(render)

// const jsxHeading=<h1 id="heading">Namaste react using JSX</h1>

// console.log(jsxHeading); // object 


// React component

const Title=()=>{
   return ( <h1>Namaste react using JSx</h1>); 
};
// component inside component can also be called like , <Title></Title>, {Title()}
const HeadingComponent=()=>{
   return ( <div>
    <Title/> 
    
        <h1 className="heading">Namaste react functional component</h1>
    </div>);
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);