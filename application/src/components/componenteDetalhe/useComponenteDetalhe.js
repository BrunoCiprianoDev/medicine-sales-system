import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const useComponenteDetalhe = (urlFetch, idFetch, urlEditar, urlVoltar) => {
    const navigate = useNavigate();
    const {data, loading, error} = useFetch(urlFetch, idFetch);
  
    const funcaoEditar = () => {
      navigate(urlEditar);
    }
  
    const funcaoVoltar = () => {
      navigate(urlVoltar);
    }
  
    return {data, loading, error, funcaoEditar, funcaoVoltar}
}