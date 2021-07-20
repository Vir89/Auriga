import React, { useState, useEffect, useRef} from 'react';
import fetchData from "../utils/fetchData"
import { setAnArrayOfElementsWithTheStatus } from '../utils/setAnArrayOfElementsWithTheStatus';


export const ApiContext = React.createContext();

const APIProvider = (props) => {

  //states to store data coming from various APIs
  const [users, setUser] = useState({});
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [carStatus, setCarStatus]= useState([]);
  const [carStatusLoaded, setCarStatusLoaded]= useState(false)
  const {user} =users
  const isInitialMount = useRef(true);


  
    
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('user')).cars.length)
            fetchData('http://localhost:5000/users', setUser, setUsersLoaded);

    }, [])

    useEffect(() => {
    
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            const kmTotal=users.user[0].cars[0].variableFeatures.kM
            const kmToMaintance=users.user[0].cars[0].variableFeatures.nextMaintenance
            console.log(carStatus)

            setAnArrayOfElementsWithTheStatus(
                users.user[0].cars[0].variableFeatures.status,
                setCarStatus,
                kmTotal,
                kmToMaintance
            )
            setCarStatusLoaded(true)
            
         }
       
        
    }, [usersLoaded])

   

 
  

  return (
      <ApiContext.Provider value={{ user: user, usersLoaded:usersLoaded, carStatus:carStatus, carStatusLoaded:carStatusLoaded}} >
          { props.children }
      </ApiContext.Provider>
  )
};

export default APIProvider;