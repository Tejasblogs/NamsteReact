
const RestaurantCard = ({name,price,rating,deliveryTime,url}) => {
    // const { resName, cuisine, url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yfyo8aklppbwdplv7ofp' } = props;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="logo"
          alt="res-logo"
          src={url}
        />
        <h3>{name}</h3>
        <h4>{rating}star </h4>
        <h3>{deliveryTime}</h3>
        {/* <h3>Meghana foods</h3>  
        <h4>Biryani Nort indian Asian</h4>
        <h4>4.4 star</h4>

        <h4>40 minutes</h4> */}
      </div>
    );
}

    export default RestaurantCard;