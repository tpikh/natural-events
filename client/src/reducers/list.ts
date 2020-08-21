import EventModel from "../models/Event";
import { RECEIVE_EVENTS, REQUEST_EVENTS, RECEIVE_EVENTS_FAILED } from "../constants/actionTypes";

export interface EventListState {
    events: EventModel[],
    loading: boolean,
    error: boolean
}

export function defaultEventListState(): EventListState {
    return {
        events: [],
        loading: false,
        error: false
    };
}

const list = (state: EventListState, action: any): EventListState => {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return {
                ...state,
                events: action.events,
                loading: false
            }
        case REQUEST_EVENTS: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case RECEIVE_EVENTS_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
    }
    return state;
}

export default list;
