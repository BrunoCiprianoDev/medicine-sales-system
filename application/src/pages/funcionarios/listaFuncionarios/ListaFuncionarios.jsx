import { React } from 'react';
import { useSearchParams } from 'react-router-dom';

import { parametrosFuncionarios } from '../parametros/pr_funcionario';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

export const ListaFuncionarios = () => {

  const url = `${urlServer}/funcionarios/`;

  const parametrosSelecionados = parametrosFuncionarios.slice(0, 1).concat(parametrosFuncionarios.slice(9, 14));

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Funcionarios'}
      urlFetch={url}
      parametros={parametrosSelecionados}
      urlDetalhe={`/funcionarios/`}
      filtro={`?${searchParams}`}
      opcaoEditar={true}
    />
  )
}

export default ListaFuncionarios
