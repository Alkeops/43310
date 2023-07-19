import { useEffect, useState } from "react";
/*
  Custom hook que recibe una funcion asincrona
  maneja los estados necesarios tipicos para las peticiones http
  y retorna un objeto con los estados y la funcion mutate

*/
export const useMutation = (fn) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const mutate = async (body) => {
    setLoading(true);
    try {
      const data = await fn(body);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return { data, loading, error, mutate };
};