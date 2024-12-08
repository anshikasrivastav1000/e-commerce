import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import{ SportsBasketballIcon} from '@mui/icons-material/SportsBasketball';
import CheckOutProduct from './CheckOutProduct';
export default function Checkout() {
  const [{basket},dispatch] = useStateValue();

  return (
   
    <div className="checkout-container">
      {/* Products Section */}
      <div className="checkout-products">
        <div className="checkout">
          <div className="checkProduct-info">
            <h2 className="checkout_name">Your Shopping Basket</h2>
          {basket.map(item =>
            (<CheckOutProduct
              key={item.id}
            title ={item.title}
            image ={item.image}
            price={item.price}
            rating = {item.rating}
            />
          )
          )}
           
           
          </div>
        </div>
      
      </div>
      <div>
      <Subtotal/>
      </div>

   
    </div>
  );
}
