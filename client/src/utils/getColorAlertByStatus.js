
const getColorAlertByStatus =(isOk, isSerious)=>{
    if (isOk) {
        return "success"
    } else if (isSerious) {
        return "danger"
    } else {
        return "warning"
    }
}

export default getColorAlertByStatus