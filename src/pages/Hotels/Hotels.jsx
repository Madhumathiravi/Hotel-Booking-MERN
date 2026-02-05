import ModifySearchbar from './ModifySearchbar.jsx'
import Hotelcard from './Hotelcard.jsx'
export default function Hotels(props){
    return(
       <>
        <ModifySearchbar
          location={props.location}
          setLocation={props.setLocation}
          rooms={props.rooms}
          setRooms={props.setRooms}
          checkInDate={props.checkInDate}
          setCheckInDate={props.setCheckInDate}
          checkOutDate={props.checkOutDate}
          setCheckOutDate={props.setCheckOutDate}
        />
        <Hotelcard/>
       </>
    )
}