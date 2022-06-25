import moment from "moment";
import React, { useEffect, useState } from "react";
import { Product } from "../types/Types";
import { CheckMarkIcon, ErrorIcon, ThreeDotsIcon } from "./icons/Icons";
import { LoadingSpinner } from "./LoadingSpinner";

export const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((data) => setProducts(data.products))
      .then(() => setIsLoading(false));
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
                  <td className="align-middle">{product.request.name}</td>
                  <td className="align-middle">{product.price}</td>
                  <td className="align-middle">
                    {formatDate(product.visitedOn)}
                  </td>
                  <td className={resolveStatusIcon(product.errored)}>
                    {productScrappingStatus(
                      product.errored,
                      product.errorMessage
                    )}
                  </td>
                  <td className="text-center align-middle">
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

function productScrappingStatus(errored: boolean, errorMessage: string) {
  return errored ? (
    <div title={errorMessage}>
      <ErrorIcon />
    </div>
  ) : (
    <CheckMarkIcon />
  );
}

function resolveStatusIcon(errored: boolean) {
  return errored
    ? "text-center align-middle text-danger"
    : "text-center align-middle text-success";
}

function formatDate(date: Date) {
  return moment(date).format("DD-MM-YYYY HH:mm:ss");
}

const fetchData = async () => {
  const rawData = await fetch("/api/products", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  return await rawData.json();
};
