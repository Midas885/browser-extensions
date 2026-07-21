import { Children, createContext, useState, useContext } from "react";
import data from '../data.json';



const ExtensionsContext = createContext();


export const ExtensionsProvider = ({children}) => {
    const [extensions, setExtensions] = useState(data);


    const removeExtension = (name) => {
        setExtensions((p) => p.filter((ex) => ex.name != name));
    }

    const toggleExtensionStatus = (name) => {
        setExtensions((prev) => 
            prev.map((ex) => 
                ex.name === name ? { ...ex, isActive: !ex.isActive } : ex
            )
        );
    };
    
    
    return (
        <ExtensionsContext.Provider value={{ extensions, toggleExtensionStatus, removeExtension }}>
        {children}
        </ExtensionsContext.Provider>
    );
    
};

export const useExtensions = () => useContext(ExtensionsContext);
