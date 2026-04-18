import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ShopPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Shop</h1>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}
