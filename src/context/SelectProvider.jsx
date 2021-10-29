import { createContext, useContext, useState } from "react";

const SelectContext = createContext()

export const SelectProvider = ({ children, ...props }) => {
    const [school, setSchool] = useState('gryffindor')

    const select = (value) => {
        setSchool(value)
    }

    return(
        <SelectContext.Provider value={{ school, select }} {...props}>
            {children}
        </SelectContext.Provider>
    )
}

export default SelectProvider

export const useSelected = () => useContext(SelectContext)