import { useState, useEffect } from "react";
import Product from "./Product";
import "./Product.css";

export default function ProductContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-container">
      {product.length > 0 ? (
        product.map((product) => (
          <Product
            
            key={product.id}
            images={product.images}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
