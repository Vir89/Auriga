import React, { useState, useEffect, useRef} from 'react';
import range from '../data/range';
import fetchData from "../utils/fetchData"
import getColorAlertByDays from '../utils/getColorAlertByDays';
import getColorAlertByStatus from '../utils/getColorAlertByStatus';
import { newArrayFromState } from '../utils/newArrayFromState';

export const ApiContext = React.createContext();

const APIProvider = (props) => {

  //states to store data coming from various APIs
  const [users, setUser] = useState({});
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [carStatus, setCarStatus]= useState([])
  const {user} =users
  const isInitialMount = useRef(true);


  
    
    useEffect(() => {
    
        fetchData('http://localhost:5000/api/users', setUser, setUsersLoaded);
        
    }, [])

    useEffect(() => {
    
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {

            users.user[0].cars[0].variableFeatures.status.interior.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious));
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.interior.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.exterior.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious));
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.exterior.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.driving.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.driving.map(element=>element),
                setCarStatus
            )

            users.user[0].cars[0].variableFeatures.status.tires.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.tires.map(element=>element),
                setCarStatus, 
            )

            users.user[0].cars[0].variableFeatures.status.other.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.other.map(element=>element),
                setCarStatus, 
            )

            users.user[0].cars[0].variableFeatures.status.engine.map(element=>element.status=getColorAlertByStatus(element.isOK, element.isSerious))
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.engine.map(element=>element),
                setCarStatus, 
            ) 

            users.user[0].cars[0].variableFeatures.status.administration.map(element=>{
                element.title==="Multa" 
                ? element.status = getColorAlertByStatus(element.isOK, element.isSerious)
                : element.status = getColorAlertByDays( range[element.title].success, range[element.title].warning, element.dueDate)
            }),
            newArrayFromState(
                users.user[0].cars[0].variableFeatures.status.administration.map(element=>element),
                setCarStatus
            ) 
         }
       
        
    }, [usersLoaded])

   

 
  

  return (
      <ApiContext.Provider value={{ user: user, usersLoaded:usersLoaded, carStatus:carStatus}} >
          { props.children }
      </ApiContext.Provider>
  )
};

export default APIProvider;