import { useParams } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="image-wrap-lg">
          <Link to={"/shop"}>
            <button className="back-btn">
              <FaArrowLeft /> Back
            </button>
          </Link>
          <img
            className="product-image-lg"
            src={product.image}
            alt={`Image of ${product.name}`}
          />
        </div>
      </section>

      <aside className="product-details">
        <h1 className="pp-name">{product.name}</h1>
        <p className="pp-price">${product.price}</p>
        <p className="pp-desc">{product.description}</p>
        <div className="pp-actions">
          <button
            className="btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </aside>
    </main>
  );
}
