import { useEffect, useState } from "react";

export const useFetchDetail = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true)
          const res = await fetch(`${url}${id}`);
          const json = await res.json();
          setData(json);
        } catch (error) {
          console.log(error.message);
          setError("Houve um erro ao carregar os dados!");
        }
        setLoading(false);
      };    
    fetchData();
  }, []);
  
  return { data, loading, error};
};