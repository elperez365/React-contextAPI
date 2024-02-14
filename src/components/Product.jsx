import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  function add(id) {
    addItemToCart(id);
    toast.success("Item added to cart!");
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => add(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
