import React from 'react'
import styles from './DetailEstoque.module.css'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { urlServer } from '../../../serverConfig';
import CircleBar from '../../../components/circleBar/CircleBar';
import Loading from '../../../components/loading/Loading';
import { SimpleDataFormat } from '../../../components/dataFormater/DataFormater';

const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'codigo', label:'Código', type: 'text' },
    {id: 3, attribute:'estoque_minimo', label:'Estoque minimo', type: 'text' },
    {id: 4, attribute:'estoque_maximo', label:'Estoque máximo', type: 'text' },
    {id: 5, attribute:'valor_venda', label:'Valor de venda', type: 'number' }]

const DetailEstoque = () => {

  const {id} = useParams();
  const url = urlServer+"/mercadorias/"+id;
  const {data: mercadoria, loading} = useFetch(url)

  const percentual = () => {
    var unidades = 0;
    if( mercadoria.hasOwnProperty('lotes')){
      mercadoria && mercadoria.lotes.map((lote)=>(
        unidades+=lote.unidades
      ))
      return (unidades/mercadoria.estoque_maximo)*100;
    }
    return 0;
  }

  const unidades = () =>{
    var unidades = 0;
    if( mercadoria.hasOwnProperty('lotes')){
      mercadoria && mercadoria.lotes.map((lote)=>(
        unidades+=lote.unidades
      ))
    }
    return unidades;
  }

  return (
    <div className={styles.MainContainer}>
        {loading && <Loading/>}
        {!loading && <div className={styles.LeftArea}> 
        <h2>Detalhes Estoque/Mercadoria</h2>
        <div className={styles['BodyData']}>
        {parameters && parameters.map((parameter)=>(
            <div key={parameter.id}>
                <label>{parameter.label}</label>
                <p>{mercadoria && mercadoria[parameter.attribute]}</p>   
            </div>
        ))}       
        </div>
        <div className={styles.ComponentGraphic}>
          <h2>Unidades no estoque: {mercadoria && unidades()}</h2>
            {mercadoria && <CircleBar  
              percentage={percentual()} 
              circleWidth='225' 
              paramRadius={100} 
              profile={25} 
              numberSize={'2.4em'}
              disableText={false}
            />}
          </div>
        </div>}
        <div className={styles.RightArea}> 
        <div><h2>Lotes cadastrados</h2></div>
        <div className={styles.ListContainer}>
          <div className={styles.HeaderList}>
              <div><p>Lote</p></div>
              <div><p>Fornecedor</p></div>
              <div><p>Validade</p></div>
              <div><p>Quantidade</p></div>
          </div>
          {mercadoria && mercadoria.hasOwnProperty('lotes') && mercadoria.lotes.map((lote)=>(
              <div key={lote.id} className={styles.lotListComponent}>
              <div><p>{lote.lote}</p></div>
              <div><p>{lote.fornecedor}</p></div>
              <div><p>{SimpleDataFormat(lote.validade)}</p></div>
              <div><p>{lote.unidades}</p></div>
            </div>
            ))}    
          </div>
        </div> 
    </div>
  )
}

export default DetailEstoque