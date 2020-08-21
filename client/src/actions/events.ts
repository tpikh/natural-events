import { AnyAction, Dispatch } from "redux";
import { FilterData, updateFilters } from "./filters";
import { REQUEST_DETAIL, RECEIVE_DETAIL, RECEIVE_EVENTS, REQUEST_EVENTS, RECEIVE_EVENTS_FAILED } from "../constants/actionTypes";

const serviceUrl = process.env.REACT_APP_API_URL;

const appendParams = (url: URL, filterData: FilterData) => {
    filterData.from && url.searchParams.append('from', filterData.from.toISOString());
    filterData.to && url.searchParams.append('to', filterData.to.toISOString());
    filterData.sources.length > 0 && url.searchParams.append('source', filterData.sources.join(','));
    filterData.statuses.length > 0 && url.searchParams.append('status', filterData.statuses.join(','));
    filterData.sort && url.searchParams.append('sort', filterData.sort);
}


export const fetchItems = (filterData: FilterData) => {
    return (dispatch: Dispatch) => {
        dispatch(updateFilters(filterData))
        dispatch(requestItems());
        var url = new URL(`${serviceUrl}/naturalevents`);

       appendParams(url, filterData)

        return fetch(url.toString())
            .then(response => response.json())
            .then(json => {
                dispatch(receiveEvents(json));
            })
            .catch(()=> {
                dispatch(receiveEventsFailed());
            });
    }
}

export const receiveEventsFailed = () => {
    return {
        type: RECEIVE_EVENTS_FAILED
    }
}


export const fetchDetails = (id: string) => (dispatch: Dispatch) => {
    dispatch(requestDetail());
    return fetch(`${serviceUrl}/naturalevents/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch(receiveDetail(json));
        })
}

export const requestDetail = () => {
    return { type: REQUEST_DETAIL }
}

export const receiveDetail = (json: any): AnyAction => {
    return {
        type: RECEIVE_DETAIL,
        payload: json
    }
}

const requestItems = (): AnyAction => {
    return { type: REQUEST_EVENTS }
}

const receiveEvents = (json: any): AnyAction => {
    return {
        type: RECEIVE_EVENTS,
        events: json,
    }
}
