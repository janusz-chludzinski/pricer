export type ProductRequest = {
  name: string;
  url: string;
  searchScope: string;
};

export type Product = {
  request: ProductRequest;
  price: number;
  visitedOn: Date;
  errored: boolean;
  errorMessage: string;
};

export type ProductResponse = {
  products: Product[];
};
