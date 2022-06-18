import moment from "moment";
import React, { useEffect, useState } from "react";
import { Product } from "../types/Types";
import { CheckMarkIcon, ErrorIcon, ThreeDotsIcon } from "./icons/Icons";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("/api/products", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });

      return await rawData.json();
    };

    setTimeout(() => {
      fetchData()
        .then((data) => setProducts(data.products))
        .then(() => setIsLoading(false));
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Last visit</th>
            <th className="text-center">Status</th>
            <th className="text-center">
              <ThreeDotsIcon />
            </th>
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
                  <td>{formatDate(product.visitedOn)}</td>
                  <td className={resolveStatusIcon(product.errored)}>
                    {productScrappingStatus(product.errored)}
                  </td>
                  <td className="text-center">
                    <button type="button" className="btn btn-primary">
                      See product
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
};

function productScrappingStatus(errored: boolean) {
  return errored ? <ErrorIcon /> : <CheckMarkIcon />;
}

function resolveStatusIcon(errored: boolean) {
  return errored ? "text-center text-danger" : "text-center text-success";
}

function formatDate(date: Date) {
  return moment(date).format("DD-MM-YYYY HH:mm:ss");
}
