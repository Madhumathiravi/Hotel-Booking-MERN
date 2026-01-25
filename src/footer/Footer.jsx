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
        <div className="flex flex-col bg-black text-white">
            <div className="w-full h-2 bg-blue-500 mb-4"></div>
            <div className="flex flex-row m-4 gap-x-8">
             <div className="flex-1">
               
                 <div className="bg-blue-500 p-2 rounded-md ">OUR OFFERINGS</div>
                
                {text.map((item) =>(
                    <div key={item.id} className="p-2">
                        <span>{item.content}</span>
                    </div>
                ))}
                
               
            </div> 
            <div >
              <div className="flex-1">
                <span>Make your travel easy with a wide range of products and services</span>
                <div className="flex flex-row justify-between mt-2">
                    <ul className="space-y-1">
                        <li>Flights</li>
                        <li>Bus</li>
                        <li>Airports</li>
                        <li>Activities</li>
                        <li>Flight Ckeck-in</li>
                    </ul>

                    <ul className="space-y-1">
                        <li>Hotels</li>
                        <li>Flight status</li>
                        <li>Travel Guides</li>
                        <li>Travel Updates</li>
                        <li>VIP Cabs</li>
                    </ul>

                    <ul className="space-y-1">
                        <li>Trains</li>
                        <li>Cabs</li>
                        <li>Check PNR Status</li>
                        <li>Corporate travel</li>
                        
                    </ul>

                    <ul className="space-y-1">
                        <li>Holidays</li>
                        <li>Airlines</li>
                        <li>EMT PRO</li>
                        <li>Blog</li>
                        
                    </ul>
                </div>
              </div>
            </div>  
            </div>
            <div></div>
        </div>
    )
}