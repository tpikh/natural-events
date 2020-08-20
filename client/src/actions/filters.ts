import { UPDATE_FILTERS } from "../constants/actionTypes"

export interface FilterData {
    from?: Date,
    to?: Date,
    sources: string[],
    statuses: string[],
    sort: string
}

export const updateFilters = (filterData: FilterData) => {
    return {
        type: UPDATE_FILTERS,
        payload: filterData
    }
}

