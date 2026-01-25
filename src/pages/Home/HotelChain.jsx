import Hotels from "./logo.js"
export default function HotelChain() {
    
  const getImage = (name) => new URL(`../../assets/hotelchain/${name}`, import.meta.url).href;
  return (
    <div className="font-poppins  border-2 bg-white shadow-xl mt-9 px-6 mb-5 max-w-6xl mx-auto py-6 rounded-xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Top Hotel Chains</h1>
      <p>EaseMyTrip has a wide range of luxury and budget-friendly hotel chain properties. 
        We have picked the finest hotels in India with world-class amenities. 
        We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
         We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location. 
         Book your hotel with EaseMyTrip and don't forget to grab an amazing hotel deal to save huge on your stay.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-4  justify-items-center mt-4">
       {Hotels.map((img, index) => (
          <div className="border border-2 rounded-xl flex items-center justify-center
           " key={index}>
            <img
            src={getImage(img)}
            alt="popular destination"
            className="w-28 rounded-xl  my-2 px-6 py-2 object-contain"
          />
          </div>
        ))}

      </div>
    </div>
  );
}
