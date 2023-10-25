import { createContext, useContext, useState } from "react";

const updatesContext = createContext();

export const useUpdates = () => {
    return useContext(updatesContext);
}

export const UpdatesProvider = ({children}) => {
    const [updates, setUpdates] = useState(null);
    return(
    <updatesContext.Provider value={{updates, setUpdates}}>
        {children}
    </updatesContext.Provider>
    )
}