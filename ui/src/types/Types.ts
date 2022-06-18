export type ProductRequest = {
  name: string;
  url: string;
  searchScope: string;
};

export type Product = {
  request: ProductRequest;
  price: string;
  visitedOn: Date;
  errored: boolean;
  errorMessage: string;
};

export type ProductResponse = {
  products: Product[];
};
