import { SET_SELECT_TAB } from "../store/constanst";

const InitialState =  {
    tabSelected : ""
}
export const tabReducer = (state = InitialState,action) => {
    switch(action.type) {
        case SET_SELECT_TAB:
            return {...state, tabSelected : action.payload}
        default : return state;
    }
}