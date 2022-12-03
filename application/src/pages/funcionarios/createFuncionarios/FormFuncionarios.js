import {React, useState} from 'react'
import styles from './FormFuncionarios.module.css'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hooks/useFetch';
import Loading from '../../../components/loading/Loading';

const url = "http://localhost:3000/funcionarios";
const FormFuncionarios = () => {

const{register, handleSubmit} = useForm();
const {httpConfig, loading, error} = useFetch(url);

const [nome, setNome] = useState('');
const [cpf, setCpf] = useState('');
const [dt_nascimento, setDtNascimento] = useState('');
const [cep, setCep] = useState('');
const [uf, setUf] = useState('');
const [cidade, setCidade] = useState('');
const [bairro, setBairro] = useState('');
const [logradouro, setLogradouro] = useState('');
const [numero, setNumero] = useState('');
const [complemento, setComplemento] = useState('');
const [telefone_um, setTelefoneUm] = useState('');
const [telefone_dois, setTelefoneDois] = useState('');
const [email, setEmail] = useState('');
const [data_admissao, setDataAdmissao] = useState('');
const [funcao, setFuncao] = useState('');

const onSubmit = (e) => {
    httpConfig(e, "POST");
    setNome('');
    setCpf('');
    setDtNascimento('');
    setCep('');
    setUf('');
    setCidade('');
    setBairro('');
    setLogradouro('');
    setNumero('');
    setComplemento('');
    setTelefoneUm('');
    setTelefoneDois('');
    setEmail('');
    setDataAdmissao('');
    setFuncao('');
}

return (
    <div>
      {loading && <Loading/>}
      {error && <p>Falha ao carregar dados....</p>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles['FormContainer']}>
      <div>
          <label>Nome
              <input name="nome" {...register('nome')} onChange={(e)=> setNome(e.target.value)} value={nome} type="text" required/>
              </label>
            </div>
            <div>
              <label>CPF
                <input name="cpf" {...register('cpf')} onChange={(e)=> setCpf(e.target.value)} type="text" value={cpf} required/>
              </label>
            </div>
            <div>
              <label>Data nascimento
                <input name="dt_nascimento" {...register('dt_nascimento')} onChange={(e)=>setDtNascimento(e.target.value)} value={dt_nascimento} type="date" required />
              </label>
            </div>
            <div>
              <label>CEP
                <input name="cep" {...register('cep')} onChange={(e)=>setCep(e.target.value)} value={cep} type="text" required />
              </label>
            </div>
            <div>
              <label>UF
                <input name="uf" {...register('uf')} onChange={(e)=>setUf(e.target.value)} value={uf} type="text" required />
              </label>
            </div>
            <div>
              <label>Cidade
                <input name="cidade" {...register('cidade')} onChange={(e)=>setCidade(e.target.value)} value={cidade} type="text" required />
              </label>
            </div>
            <div>
              <label>Bairro
                <input name="bairro" {...register('bairro')} onChange={(e)=>setBairro(e.target.value)} value={bairro} type="text" required />
              </label>
            </div>
            <div>
              <label>Logradouro
                <input name="logradouro" {...register('logradouro')} onChange={(e)=>setLogradouro(e.target.value)} value={logradouro} type="text" required />
              </label>
            </div>
            <div>
              <label>Número
                <input name="numero" {...register('numero')} onChange={(e)=>setNumero(e.target.value)} value={numero} type="text" required />
              </label>
            </div>
            <div>
              <label>Complemento
                <input name="complemento" {...register('complemento')} onChange={(e)=>setComplemento(e.target.value)} value={complemento} type="text" required />
              </label>
            </div>
            <div>
              <label>Telefone 1
                <input name="telefone_um" {...register('telefone_um')} onChange={(e)=>setTelefoneUm(e.target.value)} value={telefone_um} type="text" required />
              </label>
            </div>
            <div>
              <label>Telefone 2
                <input  name="telefone_dois" {...register('telefone_dois')} onChange={(e)=>setTelefoneDois(e.target.value)} value={telefone_dois} type="text"/>
              </label>
            </div>
            <div>
              <label>Email
                <input name="email" {...register('email')} onChange={(e)=>setEmail(e.target.value)} value={email} type="text" required />
              </label>
            </div>
            <div>
              <label>Data admissão
                <input  name="dt_admissao" {...register('dt_admissao')} onChange={(e)=>setDataAdmissao(e.target.value)} value={data_admissao} type="date" required />
              </label>
            </div>
            <div>
              <label>Função
                <input name="funcao" {...register('funcao')} onChange={(e)=>setFuncao(e.target.value)} value={funcao} type="text" required />
              </label>
            </div>
            <div></div>
            <div>
              <button>Salvar</button>
            </div>
        </form>
    </div>
  )
}

export default FormFuncionarios