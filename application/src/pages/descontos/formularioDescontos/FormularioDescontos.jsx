import { React } from 'react'
import { useParams } from 'react-router-dom'

import { urlServer } from '../../../serverConfig';
import { parametrosDescontos } from '../parametros/pr_descontos';

import CompoenenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const FormCategorias = () => {

  const { id } = useParams();

  return (
    <CompoenenteFormulario
      parametros={parametrosDescontos}
      idFetch={id !== ':id' ? `${id}` : ``}
      urlFetch={`${urlServer}/grupoDescontos/`}
      urlVoltar={'/descontos/search/'}
    />
  )
}

export default FormCategorias