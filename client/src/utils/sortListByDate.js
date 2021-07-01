export const sortListByDate = (list) => {
    const newList= list
    newList.sort( (a, b) => b.dueDate-a.dueDate)
    return newList
}
