import { stateDateFormatConverter } from "./stateDateFormatConverter"
export const newArrayFromState=(state, setState)=>{
    
        setState(prevState =>[...prevState, stateDateFormatConverter(state)])
     
}