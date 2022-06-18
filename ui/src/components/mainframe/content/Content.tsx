import React from "react";
import { ProductTable } from "../../ProductTable";
import { ContentBody } from "./ContentBody";
import { ContentHeader } from "./ContentHeader";
import { ContentNav } from "./ContentNav";

export const Main = () => {
  return (
    <div className="row d-flex h-100">
      <ContentNav />
      <ContentBody>
        <ContentHeader header="Products" />
        <ProductTable />
      </ContentBody>
    </div>
  );
};
