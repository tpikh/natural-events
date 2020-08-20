import { format } from "path";
import SourceModel from "../models/Source";
import { RECEIVE_SOURCES } from "../constants/actionTypes";

export interface MetaState {
    sources: SourceModel[]
}

export function defaultMetaState(): MetaState {
    return { sources: [] };
}

export default (state: MetaState, action: any): MetaState => {
    switch (action.type) {
        case RECEIVE_SOURCES:
            return {
                ...state,
                sources: action.payload
            }

        default:
            break;
    }
    return state;
}