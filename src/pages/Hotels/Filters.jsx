function Filters(){
    return(
        <div className="w-72">
              <div>
                map
              </div>
              <div>
                <input type="text" />
              </div>
              <div className="flex flex-row">
                <span>Filters</span>
                <span>Reset</span>
              </div>
              <div>
                <span>Price</span>
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-one" name="price" />
                      <label htmlFor="price-one">₹ 1 - ₹ 2,000</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-two" name="price" />
                      <label htmlFor="price-two">₹ 2,001 - ₹ 4,000</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-three" name="price" />
                      <label htmlFor="price-three">₹ 4,001 - ₹ 8,000</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-four" name="price" />
                      <label htmlFor="price-four">₹ 8,001 - ₹ 20,000</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-five" name="price" />
                      <label htmlFor="price-five">₹ 20,001 - ₹ 30,000</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="price-six" name="price" />
                      <label htmlFor="price-six">Above ₹ 30,000</label>
                    </li>
                  </ul>
              </div>
              <div>
                <span>Star Rating</span>
                <ul>
                  <li className="flex items-center gap-2">
                      <input type="checkbox" id="five-star" name="rating" />
                      <label htmlFor="five-star">5 Star</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="four-star" name="rating" />
                      <label htmlFor="four-star">4 Star</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="three-star" name="rating" />
                      <label htmlFor="three-star">3 Star</label>
                    </li>
                </ul>
              </div>
               <div>
                <span>User Rating</span>
                <ul>
                  <li className="flex items-center gap-2">
                      <input type="checkbox" id="excellent" name="user-rating" />
                      <label htmlFor="excellent">Excellent(4.2+)</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="very-good" name="user-rating" />
                      <label htmlFor="very-good">Very Good(3.5+)</label>
                    </li>
        
                    <li className="flex items-center gap-2">
                      <input type="checkbox" id="good" name="user-rating" />
                      <label htmlFor="good">Good(3+)</label>
                    </li>
                </ul>
              </div>
            </div>
    )
}
export default Filters;