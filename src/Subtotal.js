import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider"
import {getBasketTotal} from "./reducer";
export default function (){
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText ={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items):<strong>$ {value}</strong>
                </p>
                <small className="subtotal_gifts">
                 <input type="checkbox"/> This Order Contains Gifts

                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
                thousandSeprator={true}
            prefix={"$"}
            
            
            />

<div className="product_buttons">
             
             <button className="product_button remove">Proceed to Checkout</button>
           </div>
        </div>
    )
}