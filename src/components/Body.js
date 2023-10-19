import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const OnClickHandler = () => {
    const list = restaurantList.filter((list) => list.info.avgRating > 4);
    setRestaurantList(list);
  };

  return (
    <div className="cardContainer">
      <div className="searchContainer">
        <div>
          <input className="searchBar"></input>
          <button>search</button>
        </div>
        <button onClick={OnClickHandler}>TopRatedRestrauants</button>
      </div>
      <div className="cardsList">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
