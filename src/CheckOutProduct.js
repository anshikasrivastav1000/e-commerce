import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";
export default function CheckOutProduct({id,image,title,price,rating}){
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket =() =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
    return(
        <div className="checkout">
        <img src={image}  className="checkout_image" />
        <div className="checkProduct-info">
        <h2 className="checkout_name">{title}</h2>
        <p className="checkout_price"> price: {price}</p>
        <p className="checkout_rating">rating:{rating} </p>
        </div>
        <div className="product_buttons">
             
             <button className="product_button remove" onClick={removeFromBasket}>Remove from Cart</button>
           </div>
        
       
      </div>
    )
}