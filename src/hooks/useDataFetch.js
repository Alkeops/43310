import { useEffect, useState } from "react";
const API_URL = "https://api.escuelajs.co/api/v1";

export const useQuery = (fn, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (typeof options.enabled !== "undefined" && !options.enabled) return;
    setIsLoading(true);
    try {
      const data = await fn();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
};

export const useMutation = (fn) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (variables) => {
    setIsLoading(true);
    try {
      const data = await fn(variables);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, mutate };
};

export const useMutateProduct = () => {
  const mutateProduct = async (variables) => {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(variables),
    });
    const data = await response.json();
    return data;
  };
  return useMutation(mutateProduct);
};

/*Get all products */
export const useProducts = () => {
  const getProducts = async () => {
    const response = await fetch(`${API_URL}/products?limit=10&offset=0`);
    const data = await response.json();
    return data;
  };
  return useQuery(getProducts);
};
