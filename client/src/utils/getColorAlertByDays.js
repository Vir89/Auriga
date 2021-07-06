import getDaysLeft from "./getDaysLeft"


const getColorAlertByDays =(rangeSuccess, rangeWarning, date)=>{
    let daysLeft= getDaysLeft(date)
    if (daysLeft >= rangeSuccess) {
        return "success"
    } else if (daysLeft >= rangeWarning) {
        return "warning"
    } else {
        return "danger"
    }
}

export default getColorAlertByDays