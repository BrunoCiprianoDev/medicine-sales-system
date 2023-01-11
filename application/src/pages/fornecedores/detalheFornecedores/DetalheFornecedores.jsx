import React from 'react';
import { useParams } from 'react-router-dom';

import { parametrosFornecedores } from '../parametros/pr_fornecedor';
import { urlServer } from '../../../serverConfig';
import ComponenteDetalhe from '../../../components/componenteDetalhe/ComponenteDetalhe';



const DetalheFornecedores = () => {

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosFornecedores}
      idFetch={id}
      urlFetch={`${urlServer}/fornecedores/`}
      urlEditar={'/fornecedores/form/' + id}
      urlVoltar={'/fornecedores/search'}
    />
  )
}

export default DetalheFornecedores