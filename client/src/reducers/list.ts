import EventModel from "../models/Event";
import { RECEIVE_EVENTS, REQUEST_EVENTS } from "../constants/actionTypes";

export interface EventListState {
    events: EventModel[],
    loading: boolean
}

export function defaultEventListState(): EventListState {
    return {
        events: [],
        loading: false
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
                loading: true
            }
        }
    }
    return state;
}

export default list;