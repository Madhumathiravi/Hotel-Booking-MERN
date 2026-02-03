

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
        <div style={{ display: "grid", gap: "20px" }}>
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "500px",
              }}
            >
              {/* ✅ HOTEL IMAGE */}
              <img
                src={hotel.images?.[0]}
                alt={hotel.name}
                style={{ width: "100%", height: "294px", objectFit: "cover" }}
              />

              <div style={{ padding: "12px" }}>
                <h3>{hotel.name}</h3>
                <p>{hotel.city}</p>
                <p>⭐ {hotel.rating}</p>
                <p>
                  From <b>₹{hotel.rooms?.[0]?.basePrice}</b> / night
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotelcard;
