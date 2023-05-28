import { React } from 'react'
import { useParams } from 'react-router-dom'

import { urlServer } from '../../../serverConfig';
import { parametrosMercadorias } from '../parametros/pr_mercadorias';

import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const FormularioMercadorias = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosMercadorias}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/merchandises/`}
      urlVoltar={'/mercadorias/search/'}
    />
  )
}

export default FormularioMercadorias