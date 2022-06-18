import React from "react";

type ContentHeaderProps = {
  header: string;
};

export const ContentHeader = ({ header }: ContentHeaderProps) => {
  return <h2 className="h2-heading text-primary">{header}</h2>;
};
