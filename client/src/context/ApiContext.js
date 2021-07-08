import React, { useState, useEffect, useRef} from 'react';
import range from '../data/range';
import fetchData from "../utils/fetchData"
import getColorAlertByDays from '../utils/getColorAlertByDays';
import getColorAlertByStatus from '../utils/getColorAlertByStatus';
import getColorAlertMantenimiento from '../utils/getColorAlertMantenimiento';
import { newArrayFromState } from '../utils/newArrayFromState';

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
    
        fetchData('http://localhost:5000/api/users', setUser, setUsersLoaded);
        
    }, [])

    useEffect(() => {
    
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {

            const kmTotal=users.user[0].cars[0].variableFeatures.kM
            const kmToMaintance=users.user[0].cars[0].variableFeatures.nextMaintenance

            users.user[0].cars[0].variableFeatures.status.interior.map(element=>{element.status=getColorAlertByStatus(element.isOk, element.isSerious)});
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.interior.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.exterior.map(element=>element.status=getColorAlertByStatus(element.isOk, element.isSerious));
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.exterior.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.driving.map(element=>element.status=getColorAlertByStatus(element.isOk, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.driving.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.tires.map(element=>element.status=getColorAlertByStatus(element.isOk, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.tires.map(element=>element),
                setCarStatus, 
            )

            users.user[0].cars[0].variableFeatures.status.other.map(element=>element.status=getColorAlertByStatus(element.isOk, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.other.map(element=>element),
                setCarStatus, 
            )

            users.user[0].cars[0].variableFeatures.status.engine.map(element=>element.status=getColorAlertByStatus(element.isOk, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.engine.map(element=>element),
                setCarStatus, 
            ) 

            users.user[0].cars[0].variableFeatures.status.administration.map(element=>{
               
                if (element.title==="Multa"){
                    
                    element.status = getColorAlertByStatus(element.isOk, element.isSerious)
        
                   
                 
                } else if (element.title==="Mantenimiento"){

                    element.status = getColorAlertMantenimiento( element.dueDate, kmTotal, kmToMaintance)
                    
                }else{
                    element.status = getColorAlertByDays( range[element.title].success, range[element.title].warning, element.dueDate)
  
                }
            }),
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.administration.map(element=>element),
                setCarStatus
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