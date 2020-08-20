import { format } from "path";
import { UPDATE_FILTERS } from "../constants/actionTypes";

export interface FilterState {
    sort: string;
    from?: Date
    to?: Date,
    sources: string[],
    statuses: string[]
}

export function defaultFilterState(): FilterState {
    return {
        sort: '',
        statuses: [],
        sources: []
    };
}

export default (state: FilterState, action: any): FilterState => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return {
                ...state,
                from: action.payload.from,
                to: action.payload.to
            }

        default:
            break;
    }
    return state;
}