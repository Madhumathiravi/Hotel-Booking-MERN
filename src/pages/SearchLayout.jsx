import { useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import ModifySearchbar from "../components/ModifySearchbar/ModifySearchbar";
import Hotelcard from "../components/Hotelcard/Hotelcard";
import { useLocation } from "react-router-dom";

export default function SearchLayout() {
  const routerLocation = useLocation();
  const isHotelsPage = routerLocation.pathname === "/hotels";

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const getDayAfterTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d;
  };

  const [searchState, setSearchState] = useState({
    location: "Bangalore",
    country: "India",
    checkInDate: getTomorrow(),
    checkOutDate: getDayAfterTomorrow(),
    rooms: [{ adults: 1, children: 0 }],
  });

  return (
    <>
      {isHotelsPage ? (
        <>
          <ModifySearchbar
            searchState={searchState}
            setSearchState={setSearchState}
          />
          <Hotelcard searchState={searchState} />
        </>
      ) : (
        <Searchbar
          searchState={searchState}
          setSearchState={setSearchState}
        />
      )}
    </>
  );
}

