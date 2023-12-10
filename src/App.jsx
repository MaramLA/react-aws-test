import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      fetch("https://express-ecommerce-api-test-one.vercel.app/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.payload));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {products.length > 0 &&
        products.map((product) => (
          <article key={product._id}>
            <h3>name: {product.name}</h3>
            <p>price: {product.price}</p>
          </article>
        ))}
    </div>
  );
};

export default App;
