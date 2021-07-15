
const selectIcon = (title, type) => {
    console.log(type)
    console.log(title)
    if (title==="Mantenimiento"){
        return "repair"
    }else if (title==="Estado de limpieza"){
        return "Limpieza"
    }else if (title==="Nivel de aceite"){
        return "oil"
    }else if (title==="Nivel de refrigerante" || title === "Nivel líquido parabrisas"){
        return "liquid"
    }else{
        return type
    }
}

export default selectIcon