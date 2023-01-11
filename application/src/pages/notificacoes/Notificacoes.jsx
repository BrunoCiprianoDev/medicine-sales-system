import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ComponenteLista from '../../components/componenteLista/ComponenteLista';
import { urlServer } from '../../serverConfig';
import { parametrosNotificacoes } from './pr_notificacoes';

const Notificacoes = () => {

  let [searchParams] = useSearchParams();

  return (
    <ComponenteLista
      titulo={'Notificações'}
      urlFetch={`${urlServer}/notificacoes/`}
      parametros={parametrosNotificacoes}
      filtro={`?${searchParams}`}
      opcaoEditar={false}
    />
  )
}

export default Notificacoes