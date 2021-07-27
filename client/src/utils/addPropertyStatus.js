import dueDateRange from "../data/dueDateRange";
import getColorAlertByDays from "./getColorAlertByDays";
import getColorAlertByStatus from "./getColorAlertByStatus";
import getColorAlertMantenimiento from "./getColorAlertMantenimiento";

export const addPropertyStatus =(object, kmTotal, kmToMaintance)=>{
    const newObject = object
    newObject.forEach(element=>{
        console.log(element)

        if (element.title==="Mantenimiento"){
                    
            element.status = getColorAlertMantenimiento( element.dueDate, kmTotal, kmToMaintance)

        }else if (element.title==="Impuesto de matriculación" || element.title==="ITV"  || element.title==="Seguro" ) {

            element.status = getColorAlertByDays( dueDateRange[element.title].success, dueDateRange[element.title].warning, element.dueDate)

        }else{
            element.status=getColorAlertByStatus(element.isOk, element.isSerious)
        }
        
    });
    return newObject 
    
}
