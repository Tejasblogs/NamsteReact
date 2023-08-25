import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
// import foodData from "./foodData";
// import RestaurantCard from "./RestaurantCard";

const AppLayout = () => {
  return (
    <div className="app">
      
      <Header />
      <Body />
      <foodData/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
