import {React, useState, useEffect} from 'react'
import styles from './UpdateFuncionarios.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateFuncionarios = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/funcionarios/"+id;
    const [editar, setEditar] = useState('');
  
    const [nomeLocal, setNomeLocal] = useState('');
    const [cpfLocal, setCpfLocal] = useState('');
    const [dt_nascimentoLocal, setDt_nascimentoLocal] = useState('');
    const [cepLocal, setCepLocal] = useState('');
    const [ufLocal, setUfLocal] = useState('');
    const [cidadeLocal, setCidadeLocal] = useState('');
    const [bairroLocal, setBairroLocal] = useState('');
    const [logradouroLocal, setLogradouroLocal] = useState('');
    const [numeroLocal, setNumeroLocal] = useState('');
    const [complementoLocal, setComplementoLocal] = useState('');
    const [telefone_umLocal, setTelefone_umLocal] = useState('');
    const [telefone_doisLocal, setTelefone_doisLocal] = useState('');
    const [emailLocal, setEmailLocal] = useState('');
    const [dt_admissaoLocal, setDt_admissaoLocal] =useState('');
    const [funcaoLocal, setFuncaoLocal] = useState('');


    useEffect(()=> {
        axios.get(`${url}`)
        .then((response) => {
          setNomeLocal(response.data.nome);
          setCpfLocal(response.data.cpf);
          setDt_nascimentoLocal(response.data.dt_nascimento);
          setCepLocal(response.data.cep);
          setUfLocal(response.data.uf);
          setCidadeLocal(response.data.cidade);
          setBairroLocal(response.data.bairro);
          setLogradouroLocal(response.data.logradouro);
          setNumeroLocal(response.data.numero);
          setComplementoLocal(response.data.complemento);
          setTelefone_umLocal(response.data.telefone_um);
          setTelefone_doisLocal(response.data.telefone_dois);
          setEmailLocal(response.data.email);
          setDt_admissaoLocal(response.data.dt_admissao);
          setFuncaoLocal(response.data.funcao);
        });
      },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`${url}`, {
          nome:nomeLocal,
          cpf:cpfLocal,
          dt_nascimento:dt_nascimentoLocal,
          cep:cepLocal,
          uf:ufLocal,
          cidade:cidadeLocal,
          bairro:bairroLocal,
          logradouro:logradouroLocal,
          numero:nomeLocal,
          complemento:complementoLocal,
          telefone_um:telefone_umLocal,
          telefone_dois:telefone_doisLocal,
          email:emailLocal,
          dt_admissao:dt_admissaoLocal,
          funcao:funcaoLocal 
        }).then((response) => {
          alert(response)
        })
        setEditar('');
      }

  return (
     <div className={styles['MainContainer']}>
        <div>
          <label>Nome</label>
            {editar !== 'NOME' && <p onClick={()=>setEditar('NOME')}>{nomeLocal}</p>}   
            {editar === 'NOME' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={nomeLocal} value={nomeLocal} onChange={(e)=>setNomeLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>CPF</label>
            {editar !== 'CPF' && <p onClick={()=>setEditar('CPF')}>{cpfLocal}</p>}
            {editar === 'CPF' &&  
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cpfLocal} value={cpfLocal} onChange={(e)=>setCpfLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>
              }         
        </div>
        <div>
          <label>Data nascimento</label>
            {editar !== 'DT_NASCIMENTO' && <p onClick={()=>setEditar('DT_NASCIMENTO')}>{dt_nascimentoLocal}</p>}
            {editar === 'DT_NASCIMENTO' && 
              <form onSubmit={handleSubmit}>
                <input type='date' placeholder={dt_nascimentoLocal} value={dt_nascimentoLocal} onChange={(e)=>setDt_nascimentoLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>CEP</label>
            {editar !== 'CEP' && <p onClick={()=>setEditar('CEP')}>{cepLocal}</p>}
            {editar === 'CEP' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cepLocal} value={cepLocal} onChange={(e)=>setCepLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>UF</label>
          {editar !== 'UF' && <p onClick={()=>setEditar('UF')}>{ufLocal}</p>}
            {editar === 'UF' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={ufLocal} value={ufLocal} onChange={(e)=>setUfLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Cidade</label>
          {editar !== 'CIDADE' && <p onClick={()=>setEditar('CIDADE')}>{cidadeLocal}</p>}
            {editar === 'CIDADE' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cidadeLocal} value={cidadeLocal} onChange={(e)=>setCidadeLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Bairro</label>
          {editar !== 'BAIRRO' && <p onClick={()=>setEditar('BAIRRO')}>{bairroLocal}</p>}
            {editar === 'BAIRRO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={bairroLocal} value={bairroLocal} onChange={(e)=>setBairroLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Logradouro</label>
          {editar !== 'LOGRADOURO' && <p onClick={()=>setEditar('LOGRADOURO')}>{logradouroLocal}</p>}
            {editar === 'LOGRADOURO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={logradouroLocal} value={logradouroLocal} onChange={(e)=>setLogradouroLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Número</label>
          {editar !== 'NUMERO' && <p onClick={()=>setEditar('NUMERO')}>{numeroLocal}</p>}
            {editar === 'NUMERO' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={numeroLocal} value={numeroLocal} onChange={(e)=>setNumeroLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Complemento</label>
          {editar !== 'COMPLEMENTO' && <p onClick={()=>setEditar('COMPLEMENTO')}>{complementoLocal}</p>}
            {editar === 'COMPLEMENTO' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={complementoLocal} value={complementoLocal} onChange={(e)=>setComplementoLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Telefone 1</label>
          {editar !== 'TELEFONE_UM' && <p onClick={()=>setEditar('TELEFONE_UM')}>{telefone_umLocal}</p>}
            {editar === 'TELEFONE_UM' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={telefone_umLocal} value={telefone_umLocal} onChange={(e)=>setTelefone_umLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Telefone 2</label>
          {editar !== 'TELEFONE_DOIS' && <p onClick={()=>setEditar('TELEFONE_DOIS')}>{telefone_doisLocal}</p>}
            {editar === 'TELEFONE_DOIS' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={telefone_doisLocal} value={telefone_doisLocal} onChange={(e)=>setTelefone_doisLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Email</label>
          {editar !== 'EMAIL' && <p onClick={()=>setEditar('EMAIL')}>{emailLocal}</p>}
            {editar === 'EMAIL' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={emailLocal} value={emailLocal} onChange={(e)=>setEmailLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Data de admissão</label>
          {editar !== 'DT_ADMISSAO' && <p onClick={()=>setEditar('DT_ADMISSAO')}>{dt_admissaoLocal}</p>}
            {editar === 'DT_ADMISSAO' &&
              <form onSubmit={handleSubmit}>
                <input type='date' placeholder={dt_admissaoLocal} value={dt_admissaoLocal} onChange={(e)=>setDt_admissaoLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Função</label>
          {editar !== 'FUNCAO' && <p onClick={()=>setEditar('FUNCAO')}>{funcaoLocal}</p>}
            {editar === 'FUNCAO' &&
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={funcaoLocal} value={funcaoLocal} onChange={(e)=>setFuncaoLocal(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
    </div>
  )
}

export default UpdateFuncionarios