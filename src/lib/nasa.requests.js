import { useQuery } from "@tanstack/react-query";


const API_KEY = "gkNJiVBizkgyhGzb9ujNoi5Bu8D9L2szj29qN1nO";
const API_URL = "https://api.nasa.gov";


export const useNasaData = () => {
  const handleRequest = async () => {
    const response = await fetch(
      `${API_URL}/planetary/apod?api_key=${API_KEY}&count=5`
    ); //API_URL + ENDPOINT + QUERY PARAM
    return await response.json();
  };

  return useQuery({
    queryKey: ["Nasa"],
    queryFn: handleRequest,
  });
};
