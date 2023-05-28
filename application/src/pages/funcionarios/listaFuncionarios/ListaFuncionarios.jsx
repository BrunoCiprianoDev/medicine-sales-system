import { React } from 'react';
import { parametrosFuncionarios } from '../parametros/pr_funcionario';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

export const ListaFuncionarios = () => {

  return (
    <>
      <ComponenteLista
        titulo={'Funcionarios'}
        urlFetch={`${urlServer}/employees/search`}
        parametros={parametrosFuncionarios.slice(0, 1).concat(parametrosFuncionarios.slice(10, 13))}
        sessao={'funcionarios'}
        opcaoEditar={true}
      />
    </>
  )
}

export default ListaFuncionarios
