const sortBySeverity =(status)=>{
    if (status=="danger") {
        return 1
    } else if (status=="warning") {
        return 2
    } else {
        return 3
    }
}

export default sortBySeverity
