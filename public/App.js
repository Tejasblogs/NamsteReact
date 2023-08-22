// import React from "react";
// import ReactDOM from "react-dom/client";


// const parent = React.createElement("div",{ id:"parent"},[
// React.createElement("div", {id: "child"}, [
// React.createElement("h1",{},"I'm an h1 tag"),
// React.createElement("h2",{},"I'm an h2 tag"),
// ]),

//     React.createElement("div",{ id:"child"},[
//     React.createElement("h1",{},"I'm an h1 tag"),
//     React.createElement("h2",{},"I'm an h2 tag"),
//     ]),
// ]);



// console.log(parent);     //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";


// jsx (transpiled before it reaches the jsx ) - parcel - Babel

// JSX ==> Babel transpiles it to React.createElement ==> ReactElement-jS Object  ==> HTMLElement(render)

const jsxHeading =(
    <h1 className="head" tabIndex="5">
        Namaste React using jsx🚀
    </h1>
);



console.log(jsxHeading);     //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

