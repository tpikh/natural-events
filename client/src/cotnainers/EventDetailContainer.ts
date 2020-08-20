import { connect } from 'react-redux'
import { AppState } from '../reducers'
import EventDetail, { EventDetailData } from '../components/EventDetail';

const mapStateToProps = (state: AppState, ownProps: any) : EventDetailData => ({
    event: state.detail.event,
    loading: state.detail.loading,
    ...ownProps
  });

  export default connect(mapStateToProps)(EventDetail)