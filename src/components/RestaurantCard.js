import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, areaName, avgRating, cloudinaryImageId } =
    props?.resData.info;
  return (
    <div className="restaurantContainer">
      <div className="restauarantCard">
        <img className="restImage" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>stars - {avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
