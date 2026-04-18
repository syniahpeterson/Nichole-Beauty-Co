import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/HomePage.css";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Luxury Hair. Confidence Redefined.</h1>
        <p>
          Premium bundles, nourishing care products, and everyday essentials
          designed to keep your hair healthy, strong, and beautiful.
        </p>
        <Link to="/shop">
          <button className="btn-primary">Shop Now</button>
        </Link>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Featured Products</h2>
        <p>Our most-loved essentials for flawless hair every day.</p>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <Link to="/shop?category=bundles" className="category-card">
            Bundles
          </Link>
          <Link to="/shop?category=shampoo" className="category-card">
            Shampoo
          </Link>
          <Link to="/shop?category=conditioner" className="category-card">
            Conditioner
          </Link>
          <Link to="/shop?category=grease" className="category-card">
            Grease
          </Link>
          <Link to="/shop?category=accessories" className="category-card">
            Accessories
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>Why Choose Nichole's Beauty Co.?</h2>
        <p>
          At Nichole's Beauty Co., we believe your hair is your crown. Our
          products are carefully selected to deliver quality, durability, and
          confidence—so you can look and feel your best every day.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <h2>Ready to elevate your hair game?</h2>
        <p>Shop premium products designed with you in mind.</p>

        <Link to="/shop">
          <button className="btn-primary">Browse Products</button>
        </Link>
      </section>
    </div>
  );
}
