import {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Faq(){
    const [openId, setopenId] = useState(null);
    const questions = [
         {id:1,ques:"How can I save while booking hotels?",ans:"To save on your hotel reservation, you should try to book them in advance by comparing the best deals on various websites. One important thing that every traveler should know is that hotels in India have different GST rates depending on their tariff. The GST rate for hotels with a tariff between Rs 1,001 and RS 7,500 per night is 12% and the GST rate for hotels with a tariff equal to or above Rs 7,501 per night is 18%. So, you can create a great difference here."},

        { id:2,ques:"Can I book a hotel with a local id?",ans:"There is no law that allows hotel authorities to prohibit local couples from spending time with each other in a hotel room. There are some specific hotels which don't allow check-in with local ID proof but most of these are accepted now. Before booking a hotel, you may check on our website if someone can book a hotel with a local I'd proof or not. But most of the hotels allow check-in with a valid ID proof."},

        { id:3,ques:"How can I get early check-in or late check-out in a hotel?",ans:"Early check-ins or late checkouts in hotels are subject to availability and customers have to ask about this directly from the hotels. If a hotel reception is accommodating, they can provide their guests with both Early Check-in and Late Check-out or at least one of these. However, it also depends if rooms are available in the hotel or not. Usually, guests can enjoy free early check-in or late check-out of up to 2 hours."},

        {id: 5,ques:"How can I book cheap hotel rooms in 5 star hotels?",ans:"There are several 5-star hotels in various cities that are available at cheaper rates. To book cheap hotel rooms in 5-star hotels, one of the most important things that you can do is to be flexible about your dates. If you are not planning to travel during weekends, a stay can be booked at very cheaper rates."},
        
        {id:4,ques:"How to book hotel online?",ans:"Booking hotels on EaseMyTrip is quick and hassle-free—just search by city or hotel, select dates, rooms, and guests, then browse results using filters like price, ratings, and amenities.Choose your preferred hotel, enter guest details, and proceed to payment using options like cards, UPI, net banking, or wallets.Once payment is complete, you’ll receive instant booking confirmation via email and SMS with your e-ticket."},
    ]
    return (
      <div className="max-w-6xl m-auto font-poppins px-2">
        <p className="text-3xl  font-bold">FAQ'S</p>
        {questions.map((quest) => (
          <div key={quest.id} className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium pb-2">{quest.ques}</span>
              <button
                type="button"
                aria-expanded={openId === quest.id}
                aria-controls={`faq-${quest.id}`}
                onClick={() => setopenId(openId === quest.id ? null : quest.id)}
                className="p-1"
              >
                <RiArrowDropDownLine className={`transition-transform duration-300 text-4xl  ${
            openId === quest.id ? "rotate-180" : ""
          }`} />
              </button>
            </div>
             <div
                id={`faq-${quest.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === quest.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                >
      <p className="text-sm pt-2">{quest.ans}</p>
    </div>
            <hr className="my-4"/>
          </div>
        ))}
      </div>
    )
}