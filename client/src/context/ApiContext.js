import React, { useState, useEffect } from 'react';


export const MyContext = React.createContext();

const MyAPIProvider = ({children}) => {

  const [state, setState] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setState("itemsfetch");
    setLoading(false);
  }, [])

 
    return (
      <MyContext.Provider value={{ state, setState, loading, setLoading }}>
        {children}
      </MyContext.Provider>
    ); 
}
export default MyAPIProvider; 