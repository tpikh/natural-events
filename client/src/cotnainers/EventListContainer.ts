import { connect } from 'react-redux'
import { AppState } from '../reducers'
import EventList  from "../components/EventList";
import { fetchDetails } from '../actions';

const mapStateToProps = (state: AppState) => ({
    events: state.list.events,
    loading: state.list.loading
  });

  const mapDispatchToProps = (dispatch: any) => {
    return {
      selectEvent: (id: string) => dispatch(fetchDetails(id))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EventList)