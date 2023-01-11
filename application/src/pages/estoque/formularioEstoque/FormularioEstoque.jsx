import React from 'react';
import { useParams } from 'react-router-dom';

import { urlServer } from '../../../serverConfig';
import { parametrosEstoque } from '../parametros/pr_estoque';

import ComponenteFormulario from '../../../components/componenteFormulario/ComponenteFormulario';

const FormularioEstoque = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
    parameters={parametrosEstoque}
    idFetch={id !== ':id' ? `${id}` : ``}
    urlFetch={`${urlServer}/lotes/`}
    urlVoltar={'/estoque/search/'}
    />
  )
}

export default FormularioEstoque