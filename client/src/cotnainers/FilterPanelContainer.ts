import { AppState } from "../reducers";
import { fetchItems, FilterData, fetchSources } from "../actions";
import FilterPanel, { FilterPanelData, FilterPanelActions } from "../components/FilterPanel";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState, ownProps: any) : FilterPanelData => {
    return {
        from: state.filter.from,
        to: state.filter.to,
        sources: state.meta.sources,
        sort: state.filter.sort,
        ...ownProps
    }
};

const mapDispatchToProps = (dispatch: any): FilterPanelActions => {
    return {
        updateFilters: (data: FilterData) => dispatch(fetchItems(data)),
        getSources: () => dispatch(fetchSources())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);