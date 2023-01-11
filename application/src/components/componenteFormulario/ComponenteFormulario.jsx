import React from 'react'

import styles from './ComponenteFormulario.module.css'

import Loading from '../loading/Loading'

import AlertError from '../alertContainer/alertError/AlertError';
import InputAutoComplete from '../inputAutoComplete/InputAutoComplete';
import { useComponenteFormulario } from './useComponenteFormulario';
import SelectCustomizado from '../selectCustomizado/SelectCustomizado';

const ComponenteFormulario = ({
  parametros,
  idFetch,
  urlFetch,
  urlVoltar,
}) => {

  const { 
    loading,
    error,
    register,
    handleSubmit,
    setValue,
    onSubmit,
    handleBack } = useComponenteFormulario(parametros, idFetch, urlFetch, urlVoltar)

  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {error && <AlertError>Falha no carregamento!</AlertError>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['FormContainer']}>
          {parametros.map((parametro) => (
            <div key={parametro.id}>
              <label className={styles.LabelsForm}>{parametro.rotulo}
                {(() => {

                  switch (parametro.tipo) {
                    case "text":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo}
                      />;

                    case "date":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo}
                      />;

                    case "number":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} step='.01' required
                      />;

                    case "textarea":
                      return <textarea name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} rows='3' required
                      />;

                    case "password":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} required
                      />;

                    case "select":
                      return <select {...register(parametro.atributo)} required>
                        {parametro.opcoes.map((opcao) => (
                          <option key={opcao.id}>{opcao.valor}</option>
                        ))}
                      </select>;

                    case "autoComplete":
                      return <InputAutoComplete
                        attribute={parametro.atributo}
                        url={parametro.url}
                        attributeVisible={parametro.atributoVisivel}
                        register={register}
                        setValue={setValue}
                        hookForm={true}
                      />;

                    case "selectBox":
                      return <SelectCustomizado
                        register={register}
                        urlFetch={parametro.urlFetch}
                        atributo={parametro.atributo}
                      />;
                    default:
                      return null;
                  }
                })()}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.SubmitArea}>
          <input type="submit" value='Salvar' className={styles.SubmitButton} />
        </div>
      </form>
      <div className={styles.SubmitArea}>
        <button className={styles.ButtonBack} onClick={() => (handleBack())}>Voltar</button>
      </div>
    </div>
  )
}

export default ComponenteFormulario