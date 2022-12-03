import {useContext} from 'react'
import {OptionContext} from '../context/OptionContext';

export const useOptionContext = () =>{
    const option = useContext(OptionContext);
    if(!option) {
        console.log("Contexto não encontrado!");
    }
    return option;
}