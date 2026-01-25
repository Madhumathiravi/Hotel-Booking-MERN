import logo from "../assets/footer/EMT-footer.png";
import playstore from "../assets/footer/googleplay-footer.avif";
import applestore from "../assets/footer/applestore-footer.png";
import qrcode from "../assets/footer/qrcode-footer.png";
import copyright from "../assets/footer/img1.webp"
export default function footer(){
    const text = [
        {id:1, content:"QUICK LINKS"},
        {id:2, content:"POPULAR DESTINATIONS"},
        {id:3, content:"INTERNATIONAL DESTINATION"},
        {id:4, content:"CONNECT WITH  US"},
        {id:5, content:"OFFERS"},
        {id:6, content:"EMT INSIGHTS"},
        {id:7, content:"MEDIA"},
        {id:8, content:"INVESTORS RELATIONS"},
        {id:9, content:"CURRENT OPENINGS"},
    ]
    return(
        <div className="bg-black text-white font-poppins">
            <div className="w-full h-2 bg-blue-500 mb-4"></div>
           <div className="m-2 border-b border-[#4a4747] border-b-[0.2px] p-4 mt-4">
             
            <div className="flex flex-row gap-10">
               <div className="flex flex-col ">
                 <div className="bg-blue-500 p-2 rounded-md">OUR OFFERINGS</div>
                <div>
                     {text.map((item) =>(
                    <div key={item.id} className="p-2">
                        <span className="text-sm border-b border-b-[0.2px] border-[#4a4747] py-2 px-4">{item.content}</span>
                    </div>
                ))}
                </div>
               </div>
               <div>
                <div className="font-semibold text-md">Make your travel easy with a wide range of products and services</div>
                <div className="grid grid-cols-4 mt-4 gap-x-20">
                 <ul className="space-y-2 text-sm">
                         <li>Flights</li>
                         <li>Bus</li>
                         <li>Airports</li>
                        <li>Activities</li>
                         <li>Flight Check-in</li>
                     </ul>

                     <ul className="space-y-2 text-sm">
                         <li>Hotels</li>
                         <li>Flight status</li>
                         <li>Travel Guides</li>
                         <li>Travel Updates</li>
                       <li>VIP Cabs</li>
                    </ul>

                     <ul className="space-y-2 text-sm">
                         <li>Trains</li>
                         <li>Cabs</li>
                         <li>Check PNR Status</li>
                         <li>Corporate travel</li>
                        
                     </ul>

                     <ul className="space-y-2 text-sm">
                         <li>Holidays</li>
                         <li>Airlines</li>
                       <li>EMT PRO</li>
                         <li>Blog</li>
                        
                     </ul>  
                </div>
               </div>
            </div>
           </div>
            
            <div className="flex flex-row gap-10 justify-between boder-b border-[#4a4747] border-b-[0.2px] px-4 py-2">
             <div className="w-2/4">
            <img src={logo} alt="easemytrip" className="w-40" />
            <p className="text-sm">
            EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines...
            </p>
        </div>

        <div className="w-1/2">
            <p>DOWNLOAD EASEMYTRIP</p>
            <div className="flex gap-2">
            <img src={playstore}  className="w-32 h-12 m-2"/>
            <img src={applestore} className="w-32 h-12 m-2" />
            </div>
        </div>

        <div className="w-1/2">
            <p>SCAN QR CODE</p>
            <img src={qrcode} className="w-20 h-20" />
        </div>
      </div>
      <div className="flex flex-row justify-between p-4">
       <p className="text-[#707070] text-sm">Copyright © 2026 EaseMyTrip</p>
       <img src={copyright} className="w-96 h-8" />
      </div>

        </div>
    )
}