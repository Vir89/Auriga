import React, { useState, useEffect} from 'react';
import fetchData from "../utils/fetchData"

export const ApiContext = React.createContext();

const APIProvider = (props) => {

  //states to store data coming from various APIs
  const [users, setUser] = useState({});
  const [usersLoaded, setUsersLoaded] = useState(false);

  const {user} =users
  console.log(user)


  useEffect(() => {
    
      fetchData('http://localhost:5000/api/users', setUser, setUsersLoaded);
      
  }, [])
  

  return (
      <ApiContext.Provider value={{ user: user, usersLoaded:usersLoaded }} >
          { props.children }
      </ApiContext.Provider>
  )
};

export default APIProvider;