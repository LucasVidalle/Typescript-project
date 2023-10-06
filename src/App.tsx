import { useEffect, useState } from 'react'
import './App.css'
import "./Card.tsx"

type productsAppy = {
  product: Array<product>
  total: number;
  skip: number;
  limit: number;
};

type product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  const [resultFetch, setResultFetch] = useState<productsAppy>();
  const productsApi = "https://dummyjson.com/products";
  useEffect(() => {
    fetch(productsApi)
      .then((response) => response.json())
      .then((data) => setResultFetch(data));
  }, []);

  return PRODUCTS.map(() => {
    return
    (
      <>
        <Card
          id={ }
          title={ }
          price={ }

        />
      </>
    )
  })

  export default App
