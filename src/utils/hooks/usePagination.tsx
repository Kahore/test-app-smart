import React from "react";

const usePagination = () => {
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPage] = React.useState<number>(1);
  const [totalItems, setTotalItems] = React.useState<number | null>(null);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handleTotalPages = (value: number) => {
    setTotalPage(value);
  };
  const handleTotalItems = (value: number) => {
    setTotalItems(value);
  };
  const handleTotal = (data: {
    items: any[];
    total: number;
    limit: number;
  }) => {
    handleTotalPages(Math.ceil(data.total / data.limit));
    handleTotalItems(data.total);
  };

  return {
    page,
    totalPages,
    totalItems,
    handlePagination,
    handleTotalPages,
    handleTotalItems,
    handleTotal,
  };
};
export default usePagination;
