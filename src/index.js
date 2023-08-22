import React from "react";
import ReactDOM from "react-dom/client";
const TITE_TEXT = '  Namaste React using jsx🚀';

// jsx (transpiled before it reaches the jsx ) - parcel - Babel

// JSX ==> Babel transpiles it to React.createElement ==> ReactElement-jS Object  ==> HTMLElement(render)

const Title = () =>(
    <h1 className="head" tabIndex="5">
        {TITLE_TEXT}
    </h1>
);

const Headingcomponent = () => (
<div id="container">
<Title/>

<h1 className="heading">Namaste React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);

