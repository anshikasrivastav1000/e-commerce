import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ title, images, description, price, rating }) {

   const [ state,dispatch] = useStateValue();
   const addToBasket = () => {
    dispatch({
    type:"ADD_TO_BASKET",
    item:{
        title: title,
        image:images,
        price:price,
        rating:rating

    }

    })
   }
  return (
    <div className="product">
      <img src={images} alt={title} className="product_image" />
      <h2 className="product_name">{title}</h2>
      <p className="product_price">${price}</p>
      <p className="product_rating">⭐ {rating}/5</p>
      <p className="product_description">{description}</p>
      <div className="product_buttons">
        <button className="product_button add" onClick={addToBasket} >Add to Cart</button>
      </div>
    </div>
  );
}
