import { useNavigate } from "react-router-dom";
import { useFetchDetail } from "../../hooks/useFetchDetail";

export const useComponenteDetalhe = (urlFetch, idFetch, urlEditar, urlVoltar) => {
    const navigate = useNavigate();
    const {data, loading, error} = useFetchDetail(urlFetch, idFetch);
  
    const funcaoEditar = () => {
      navigate(urlEditar);
    }
  
    const funcaoVoltar = () => {
      navigate(urlVoltar);
    }
  
    return {data, loading, error, funcaoEditar, funcaoVoltar}
}