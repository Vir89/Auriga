const getDaysLeft = (date) => {
    const today = new Date()
    const dueDate = new Date(date) 
    const leftInTime = dueDate.getTime() - today.getTime();
    const leftDays = Math.ceil(leftInTime / (1000 * 3600 * 24));

    return leftDays
}


export default getDaysLeft