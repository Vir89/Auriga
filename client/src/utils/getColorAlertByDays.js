
const getColorAlertByDays =(rangeSuccess, rangeWarning, daysLeft)=>{
    if (daysLeft >= rangeSuccess) {
        return "success"
    } else if (daysLeft >= rangeWarning) {
        return "warning"
    } else {
        return "danger"
    }
}

export default getColorAlertByDays