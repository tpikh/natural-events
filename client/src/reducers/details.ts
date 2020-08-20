import EventModel from "../models/Event";
import { RECEIVE_DETAIL, REQUEST_DETAIL } from "../constants/actionTypes";

export interface DetailsState {
    event?: EventModel | null,
    loading: boolean
}

export function defaultDetailState(): DetailsState {
    return {
        event: null,
        loading: false
    };
}

const detail = (state: DetailsState, action: any): DetailsState => {
    switch (action.type) {
        case RECEIVE_DETAIL:
            return {
                ...state,
                event: action.payload,
                loading: false
            }
        case REQUEST_DETAIL: {
            return {
                ...state,
                loading: true
            }
        }
    }
    return state;
}

export default detail;