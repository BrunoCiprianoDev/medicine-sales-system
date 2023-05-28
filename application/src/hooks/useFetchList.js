import { useState} from 'react';

const useFetchList = () => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchData = async (url) => {
      setIsLoading(true);
      try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
         }
         const jsonData = await response.json();
         console.log(jsonData)
         setData(jsonData);
      } catch (error) {
         setError(error.message);
      } finally {
         setIsLoading(false);
      }
   };

   return { data, fetchData, isLoading, error };
};

export default useFetchList;