import Navbar from "./components/Navbar"
import ProductGrid from "./components/ProductGrid"
import products from "./data/products.js"

export default function App () {
  return (
    <>
      <Navbar />
      <ProductGrid products={products}/>
    </>
  )
}