import { useState } from "react";

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingHandler = (loadingState: boolean) => setIsLoading(loadingState);
  return {
    isLoading,
    loadingHandler,
  };
};
