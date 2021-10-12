import React, { useState, useEffect, useRef} from 'react';
import { setAnArrayOfElementsWithTheStatus } from '../utils/setAnArrayOfElementsWithTheStatus';


export const ApiContext = React.createContext();

const APIProvider = (props) => {

  //states to store data coming from various APIs
  const [user, setUser] = useState({});
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [carStatus, setCarStatus]= useState([]);
  const [carStatusLoaded, setCarStatusLoaded]= useState(false)
  const isInitialMount = useRef(true);
 

    useEffect(() => {
        
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else if(usersLoaded){

            console.log(user)
            /*
            console.log(user.personalDetails)
            console.log(user.cars)
            const kmTotal = user.cars[0].variableFeatures.kM
            const kmToMaintance = user.cars[0].variableFeatures.nextMaintenance  

            setAnArrayOfElementsWithTheStatus(
                user.cars[0].variableFeatures.status, 
                setCarStatus,
                kmTotal,
                kmToMaintance
            ) */
            setCarStatusLoaded(true) 
            
         }
       
        
    }, [usersLoaded]) 


  return (
      <ApiContext.Provider value={{ setUser:setUser, user: user, setUsersLoaded:setUsersLoaded, usersLoaded:usersLoaded, carStatus:carStatus, carStatusLoaded:carStatusLoaded}} >
          { props.children }
      </ApiContext.Provider>
  )
};

export default APIProvider;