import { useEffect, useState } from "react";

export const useFetch = (url, filter) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("DELETE");
      setItemId(data);
    } else if (method === "PATCH") {
      setConfig({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      setMethod('PATCH');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true)
          const res = await fetch(`${url}${filter}`);
          const json = await res.json();
          setData(json);
          setMethod(null);
          setError(null);
        } catch (error) {
          console.log(error.message);
          setError("Houve um erro ao carregar os dados!");
        }
        setLoading(false);
      };    
    fetchData();
  }, [url, callFetch, filter]);
  useEffect(() => {
  
    const httpRequest = async () => {  
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);
        const json = await res.json();
        setCallFetch(json);
      } else if (method === "PATCH") {
        let fetchOptions = [`${url}${filter}`, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, itemId, method, url, filter]);
  return { data, httpConfig, loading, error};
};