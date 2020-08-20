import { Dispatch, AnyAction } from "redux";
import { RECEIVE_SOURCES } from "../constants/actionTypes";

const serviceUrl = process.env.REACT_APP_API_URL;

export const fetchSources = () => {
    return (dispatch: Dispatch) => {
        return fetch(`${serviceUrl}/sources`)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveSources(json));
            })
    }
}




const receiveSources = (json: any): AnyAction => {
    return {
        type: RECEIVE_SOURCES,
        payload: json,
    }
}