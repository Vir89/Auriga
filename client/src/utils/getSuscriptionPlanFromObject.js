const getSuscriptionPlanFromObject = (user) => {
    const suscriptionLevel = {
        basic: "mi.Auriga Básico",
        estandar: "mi.Auriga Estándar",
        premium: "mi.Auriga Premium",
    }
    return user.personalDetails.suscriptor ? suscriptionLevel[user.personalDetails.suscriptionPlan] : "no suscrito"
}
export default getSuscriptionPlanFromObject;