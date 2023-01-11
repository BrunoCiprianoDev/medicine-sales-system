import { createContext, useState } from 'react'
export const OptionContext = createContext();

export const OptionContextProvider = ({ children }) => {
    const [option, setOption] = useState('ESTOQUE');
    return (
        <OptionContext.Provider value={{ option, setOption }}>
            {children}
        </OptionContext.Provider>
    )
}