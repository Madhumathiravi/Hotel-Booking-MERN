import { useLocation } from "react-router-dom";

const Hotelcard = () => {
  const location = useLocation();
  const hotels = location.state?.hotels || [];

  return (
    <div>
      <h2>Available Hotels</h2>

      {hotels.length === 0 ? (
        <p>No hotels found</p>
      ) : (
        <div>
          {hotels.map((hotel) => (
            <div key={hotel._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{hotel.name}</h3>
              <p>{hotel.city}</p>
              <p>₹{hotel.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotelcard;
