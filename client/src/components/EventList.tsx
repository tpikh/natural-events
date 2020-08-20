import EventModel from "../models/Event";
import React from "react";
import EventListItem from "./EventListItem";
import { Loader, List } from "rsuite";


export interface EventListData {
  events: EventModel[],
  loading: boolean,
}

export interface EventListActions {
  selectEvent: Function
}

type EventListProps = EventListData & EventListActions;

export default class EventList extends React.Component<EventListProps> {

  render() {
    if (this.props.loading) {
      return (<Loader size="lg" className="mx-5 my-5" />);
    }

    return this.props.events?.length ?
      (<List bordered hover autoScroll={true}>
        {this.props.events.map(event =>
          <EventListItem key={event.id} event={event} onClick={() => this.props.selectEvent(event.id)}></EventListItem>)}
      </List>)
      : <span>No items to show.</span>

  }
}