import getDaysLeft from "./getDaysLeft"
import kmToMaintenance from "./kmToMaintenance"



const getColorAlertMantenimiento =(date, kmTotal, kmMaintance)=>{
    let daysLeft= getDaysLeft(date)
    let kmLeft = kmToMaintenance(kmTotal, kmMaintance)
    console.log(daysLeft)
    console.log(kmLeft)
    if (daysLeft > 60 & kmLeft > 3000) {
        return "success"
    } else if (daysLeft < 30 || kmLeft < 1000) {
        return "danger"
    } else {
        return "warning"
    }
}

export default getColorAlertMantenimiento