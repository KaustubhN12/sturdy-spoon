import { SET_VALUE } from "./ActionType"

const initialState = {

    inputVal : ""

}

export const reducer = (state = initialState,{type,payload}) => {

    switch (type) {
        case SET_VALUE : 
        return {
            ...state,
            inputVal:payload
        }
        default : 
        return state;
    }

}