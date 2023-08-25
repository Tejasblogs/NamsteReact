import RestaurantCard from "./RestaurantCard";
import { data } from "./data";
// import { food, foodObject } from "./foodData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          data.map(element=><RestaurantCard {...element} />)
        }

      </div>
    </div>
  );
};

export default Body;
