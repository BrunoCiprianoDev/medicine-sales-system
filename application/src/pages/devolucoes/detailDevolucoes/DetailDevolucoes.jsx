import React from 'react';
import { useParams } from 'react-router-dom';

import { urlServer } from '../../../serverConfig';
import { parameters } from '../parameters/pr_devolucoes';

import DetailContainer from '../../../components/detailContainer/DetailContainer';

const DetailDevolucoes = () => {

    const useParameters = parameters.slice(0, 14)
    const { id } = useParams();
    const url = `${urlServer}/devolucoes/${id}`;
    const urlHandleEdit = `/devolucoes/edit/${id}`;
    const urlHandleBack = `/devolucoes/`

    return (
        <DetailContainer
            parameters={useParameters}
            url={url}
            urlHandleEdit={urlHandleEdit}
            urlHandleBack={urlHandleBack}
        />
    )
}

export default DetailDevolucoes