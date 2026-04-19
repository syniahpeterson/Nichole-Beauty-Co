import { useParams } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="image-wrap-lg">
          <img className="product-image-lg" src={product.image} alt={`Image of ${product.name}`} />
        </div>
      </section>

      <aside className="product-details">
        <h1 className="pp-name">{product.name}</h1>
        <p className="pp-price">${product.price}</p>
        <p className="pp-desc">{product.description}</p>
        <div className="pp-actions">
          <button className="btn-primary">Add to Cart</button>
        </div>
      </aside>
    </main>
  );
}
