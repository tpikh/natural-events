import list, { EventListState, defaultEventListState } from './list';
import filter, { FilterState, defaultFilterState } from './filter';
import meta, { defaultMetaState, MetaState } from './meta';
import detail, { DetailsState, defaultDetailState } from './details';

export interface AppState {
    list: EventListState,
    filter: FilterState,
    meta: MetaState,
    detail: DetailsState
}

export function defaultState() : AppState {
  return {
    list: defaultEventListState(),
    filter: defaultFilterState(),
    meta: defaultMetaState(),
    detail: defaultDetailState()
  };
}


export function mainReducer(state: AppState = defaultState(), action: any) {
  return {
      list: list(state.list, action),
      filter: filter(state.filter, action),
      meta: meta(state.meta, action),
      detail: detail(state.detail, action)
  }
}
