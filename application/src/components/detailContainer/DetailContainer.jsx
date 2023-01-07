import React from 'react'
import Loading from '../loading/Loading'
import styles from './DetailContainer.module.css'
import { useNavigate} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import AlertError from '../alertContainer/alertError/AlertError'
const DetailContainer = ({
  parameters,
  url,
  urlHandleEdit,
  urlHandleBack
}) => {

  const navigate = useNavigate();
  const {data, loading, error} = useFetch(url);

  const handleEdit = () => {
    navigate(urlHandleEdit);
  }

  const handleBack = () => {
    navigate(urlHandleBack);
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles['BodyData']}>
        {error && <AlertError>Falha no carregamento!</AlertError>}
        {loading && <Loading/>}
        {parameters && parameters.map((parameter)=>(
            <div key={parameter.id}>
                <label>{parameter.label}</label>
                <p>{data && data[parameter.attribute]}</p>   
            </div>
        ))}       
      </div>
      <div className={styles.ButtonArea}>
          <button onClick={()=>(handleEdit())}>Editar</button>
          <button onClick={()=>(handleBack())}>Voltar</button>      
        </div>
    </div>
  )
}

export default DetailContainer