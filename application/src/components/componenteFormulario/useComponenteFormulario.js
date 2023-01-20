import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const useComponenteFormulario = (parametros, idFetch, urlFetch, urlVoltar) => {
  
  const navigate = useNavigate();
  const { data, httpConfig, loading, error } = useFetch(`${urlFetch}`, idFetch !== 'adicionar' ? `${idFetch}` : ``);
  const { register, handleSubmit, reset, setValue } = useForm();

  if (idFetch) {
    parametros.map((parametro) => (
      setValue(parametro.atributo, data && data[parametro.atributo])
    ))
  }

  const onSubmit = (e) => {
    if (idFetch === 'adicionar') {
      httpConfig(e, "POST");
      parametros.map((parametro) => (
        reset(formValues => ({
          ...formValues,
          [parametro.atributo]: ''
        }))
      ))
    } else {
      httpConfig(e, 'PATCH')
    }
    alert('Dados enviados!')
  }

  const handleBack = () => {
    navigate(urlVoltar);
  }

  return { data, httpConfig, loading, error, register, handleSubmit, reset, setValue, onSubmit, handleBack }
}