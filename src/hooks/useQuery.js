import { useEffect, useState } from "react";
/*
  Custom hook que recibe una funcion asincrona
  maneja los estados necesarios tipicos para las peticiones http
  y retorna un objeto con los estados. 
  De tal forma que se extrae la logica de los estados sobre el componente

*/
export const useQuery = (fn) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fn();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
