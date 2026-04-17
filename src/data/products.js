import bodyBundle from "../image/body-wave-bundle.png";
import straightBundle from "../image/straight-hair-bundle.png";
import hydratingShampoo from "../image/hydrating-shampoo.png";
import repairConditioner from "../image/repair-conditioner.png";
import growthGrease from "../image/growth-grease.png";
import elasticHeadbands from "../image/elastic-headbands.png";
import noSnagHairTies from "../image/no-snag-hair-ties.png";
import detanglingComb from "../image/detangling-comb.png";

const products = [
  {
    id: 1,
    name: "Nikki Luxe Body Wave Bundle",
    price: 120,
    category: "bundles",
    image: bodyBundle,
    description:
      "Soft and voluminous body wave hair bundle with a natural shine.",
  },
  {
    id: 2,
    name: "Nichole Straight Hair Bundle",
    price: 110,
    category: "bundles",
    image: straightBundle,
    description: "Silky straight bundle with a smooth and sleek finish.",
  },
  {
    id: 3,
    name: "Hydrating Moisture Shampoo",
    price: 18,
    category: "shampoo",
    image: hydratingShampoo,
    description: "Deep cleansing shampoo that restores moisture and shine.",
  },
  {
    id: 4,
    name: "Repair & Strength Conditioner",
    price: 20,
    category: "conditioner",
    image: repairConditioner,
    description: "Strengthens and nourishes damaged hair for healthier growth.",
  },
  {
    id: 5,
    name: "Growth Hair Grease",
    price: 12,
    category: "grease",
    image: growthGrease,
    description:
      "Wide-tooth detangling comb designed to gently remove knots and reduce breakage. Perfect for all hair types, including natural hair, wigs, and extensions.",
  },
  {
    id: 6,
    name: "Elastic Headbands (3 Pack)",
    price: 10,
    category: "accessories",
    image: elasticHeadbands,
    description: "Comfortable and stylish headbands for everyday wear.",
  },
  {
    id: 7,
    name: "No-Snag Hair Ties (10 Pack)",
    price: 8,
    category: "accessories",
    image: noSnagHairTies,
    description: "Gentle hair ties that prevent breakage and damage.",
  },
  {
    id: 8,
    name: "Detangling Comb",
    price: 12,
    category: "accessories",
    image: detanglingComb,
    description: "",
  },
];

export default products;
