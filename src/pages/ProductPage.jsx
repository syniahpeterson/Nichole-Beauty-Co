import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <h1>Product {id}</h1>
  )
}
