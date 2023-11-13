import { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <a key={product.id} href="/product">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </a>
      ))}
    </div>
  );
}
