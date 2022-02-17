import { SET_SELECT_TAB } from "../store/constanst";

export const setSelectedTab = (selectedTab) => async (dispatch,getState) =>{
    try {
        dispatch({
            type : SET_SELECT_TAB,
            payload : selectedTab
        })  
    } catch (error) {
        console.log(error);
    }
}