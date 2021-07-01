
export const newArrayFromState=(state, setState)=>{
    
        setState(prevState =>[...prevState, state])
     
}