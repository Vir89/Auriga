import { addPropertyStatus } from "./addPropertyStatus"


export const setAnArrayOfElementsWithTheStatus=(state, setState, kmTotal, kmToMaintance)=>{
        
        setState(prevState =>[...prevState, addPropertyStatus(state.administration, kmTotal,kmToMaintance)]); 
        setState(prevState =>[...prevState, addPropertyStatus(state.interior, kmTotal,kmToMaintance)]);
        setState(prevState =>[...prevState, addPropertyStatus(state.exterior, kmTotal,kmToMaintance)]);
        setState(prevState =>[...prevState, addPropertyStatus(state.engine, kmTotal,kmToMaintance)]);
        setState(prevState =>[...prevState, addPropertyStatus(state.tires, kmTotal,kmToMaintance)]);
        setState(prevState =>[...prevState, addPropertyStatus(state.driving, kmTotal,kmToMaintance)]);
        setState(prevState =>[...prevState, addPropertyStatus(state.other, kmTotal,kmToMaintance)]); 
     
}