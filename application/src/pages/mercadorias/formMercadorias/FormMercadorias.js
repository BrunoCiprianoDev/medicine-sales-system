import {React} from 'react'
import FormContainer from '../../../components/formContainer/FormContainer';
import { useParams} from 'react-router-dom'

const parameters = [
    {id: 1, attribute:'nome', label:'Nome', type: 'text'},
    {id: 2, attribute:'codigo', label:'Código', type: 'text' },
    {id: 4, attribute:'departamento', label:'Departamento', type: 'select', 
      options:[
        {id:1, value: 'MEDICAMENTO'},
        {id:2, value: 'SUPLEMENTOS'},
        {id:3, value: 'DERMATOLOGICO'},
        {id:4, value: 'HIGIENE'},
        {id:5, value: 'GERIATRIA'},
        {id:6, value: 'INFANTIL'},
        {id:7, value: 'BELEZA'},
        {id:8, value: 'OUTROS'}
      ]
    },
    {id: 5, attribute:'categoria_id', label:'Categoria', type: 'number' },
    {id: 6, attribute:'estoque_minimo', label:'Estoque minimo', type: 'text' },
    {id: 7, attribute:'estoque_maximo', label:'Estoque máximo', type: 'text' },
    {id: 8, attribute:'estoque_atual', label:'Estoque atual', type: 'text' },
    {id: 9, attribute:'valor_venda', label:'Valor de venda', type: 'number' },
    {id: 10, attribute:'temp_armazenamento', label:'Temperatura armazenamento', type: 'text' },
    {id: 11, attribute:'descricao', label:'Descricao', type: 'textarea' },
  ]

const FormMercadorias = ({edit}) => {

  const {id} = useParams();
  const url= (edit ?  "http://localhost:3000/mercadorias/"+id  :  "http://localhost:3000/mercadorias/");
  const urlBack= '/mercadorias/';

    return (
      <FormContainer 
        parameters={parameters}
        url={url}
        urlBack={urlBack}
        edit={edit}
      />
    )
  }

export default FormMercadorias