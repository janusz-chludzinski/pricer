import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";
import { stringify } from "querystring";

function App() {
  type ProductRequest = {
    name: string;
    url: string;
    scope: string;
  };

  type Product = {
    request: ProductRequest;
    price: string;
  };

  type ProductResponse = {
    products: Product[];
  };

  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("/api/products", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });

      return await rawData.json();
    };

    fetchData().then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, key) => {
              return (
                <tr
                  role="button"
                  onClick={() => window.open(product.request.url)}
                  key={key}
                >
                  <td>{product.request.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      See
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
