import { React } from 'react'
import { useParams } from 'react-router-dom'

import { parametrosFornecedores } from '../parametros/pr_fornecedor'
import { urlServer } from '../../../serverConfig';
import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';


const FormularioFornecedores = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosFornecedores}
      idFetch={id !== ':id' ? `${id}` : ``}
      urlFetch={`${urlServer}/fornecedores/`}
      urlVoltar={'/fornecedores/search/'}
    />
  )
}

export default FormularioFornecedores