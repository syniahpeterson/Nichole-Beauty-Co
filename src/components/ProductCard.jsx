import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <li className="product-card">
      <div className="image-wrap">
        <img
          className="product-image image-zoom"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>
        <button className="btn-primary">View Details</button>
      </Link>
    </li>
  );
}
