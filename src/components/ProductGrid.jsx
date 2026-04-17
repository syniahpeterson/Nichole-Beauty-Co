import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

export default function ProductGrid({ products }) {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
