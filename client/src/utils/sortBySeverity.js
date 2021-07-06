const sortBySeverity =(isOk, isSerious)=>{
    if (isOk) {
        return 1
    } else if (isSerious) {
        return 2
    } else {
        return 3
    }
}

export default sortBySeverity
