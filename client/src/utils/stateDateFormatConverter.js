export const stateDateFormatConverter = (value) =>{
    const newValue =value;
    newValue.dueDate =new Date(newValue.dueDate);
    return newValue
}

