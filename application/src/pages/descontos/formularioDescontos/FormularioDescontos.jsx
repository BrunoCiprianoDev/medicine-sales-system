import { React } from 'react'
import { useParams } from 'react-router-dom'

import { urlServer } from '../../../serverConfig';
import { parametrosDescontos } from '../parametros/pr_descontos';

import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const FormCategorias = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosDescontos}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/discounts/`}
      urlVoltar={'/descontos/search/'}
    />
  )
}

export default FormCategorias