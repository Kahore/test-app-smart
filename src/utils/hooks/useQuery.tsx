import React from "react";

const useQuery = () => {
  const [query, setQuery] = React.useState<string | undefined>(undefined);

  const handleQuery = (query: string | undefined) => {
    setQuery(query);
  };

  return {
    query,
    handleQuery,
  };
};
export default useQuery;
