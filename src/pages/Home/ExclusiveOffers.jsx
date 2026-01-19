import card1 from "../../assets/exclusive/card1.webp";
export default function ExclusiveOffers(){
    const offers = [
        {id:1, bg:"bg-gradient-to-r from-orange-600 to-orange-300",
            img: card1, smtext:"Hotel Offer", bgtext:"Upto 20%",
            code:"GRAB20", divtext:"Get UPto 20% Discount on Selected Hotels Booking",
            valid:"Valid till: 31st Jan 2026" , image:card1
         }
    ]
    return(
       <>
       <div className=" font-poppins text-3xl font-bold mb-4 text-center"> Exclusive Offers</div>
        <div className="w-3/4 m-auto border-1 rounded-md p-3 border-black bg-grey-100">
           {offers.map((d) =>(
             <div className={`${d.bg} flex flex-row`}>
                <div>
                    <p>
                    {d.smtext}
                </p>
                <p>
                    {d.bgtext}
                </p>
                <div className="border border-dashed border-white">
                     <p>Use Code:</p>
                     <p>{d.code}</p>
                </div>
                <div>
                    <img src={d.image} alt=""  className="rounded-md"/>
                </div>
                </div>
            </div>
           ))

           }
        </div>
       </>
    )
}