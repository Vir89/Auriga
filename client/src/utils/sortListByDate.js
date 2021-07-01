

export const sortListByDate = (list) => {
    const newList= list
    newList.sort( (a, b) => a.dueDate-b.dueDate)
    return newList
    
}
