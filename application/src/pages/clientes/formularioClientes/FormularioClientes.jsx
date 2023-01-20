import { React } from 'react';
import { useParams } from 'react-router-dom';

import { parametrosClientes } from '../parametros/pr_clientes';
import { urlServer } from '../../../serverConfig';

import ComponenteFormulario  from '../../../components/componenteFormulario/ComponenteFormulario';

const FormClientes = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosClientes}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/clientes/`}
      urlVoltar={'/clientes/search/'}
    />
  )
}

export default FormClientes