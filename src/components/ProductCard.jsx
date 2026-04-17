export default function ProductCard({ product }) {
  return (
    <li className="product-card">
      <div className="image-wrap">
        <img
          className="product-image"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <button className="btn-primary">View Details</button>
    </li>
  );
}
