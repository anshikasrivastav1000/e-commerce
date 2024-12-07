import "./Checkout.css";
import CurrencyFormat from "react-currency-format";

export default function Checkout() {
  return (
    <div className="checkout-container">
      {/* Products Section */}
      <div className="checkout-products">
        <div className="checkout">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/u/0/-original-imahf4qpc5hhzhma.jpeg?q=70"
            alt="Product"
            className="checkout_image"
          />
          <div className="checkProduct-info">
            <h2 className="checkout_name">Product Name</h2>
            <p className="checkout_price">$9</p>
            <p className="checkout_rating">⭐ 4.5/5</p>
            <p className="checkout_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              eum!
            </p>
            <div className="product_buttons">
             
              <button className="product_button remove">Remove from Cart</button>
            </div>
          </div>
        </div>
        {/* Repeat for more products */}
      </div>

      {/* Subtotal Section */}
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal (0 items): <strong>$0</strong>
              </p>
              <small className="subtotal_gifts">
                <input type="checkbox" /> This Order Contains Gifts
              </small>
            </>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button className="subtotal_button">Proceed to Checkout</button>
      </div>
    </div>
  );
}
