import EventModel from "../models/Event";
import React from "react";
import EventListItem from "./EventListItem";
import { Loader, List } from "rsuite";

export interface EventListData {
  events: EventModel[],
  loading: boolean,
  error: boolean
}

export interface EventListActions {
  selectEvent: Function
}

type EventListProps = EventListData & EventListActions;

export default (props: EventListProps) => {
  const { error, loading, events, selectEvent } = props;
  if(error) {
    return <p>Failed to load events.</p>
  }
  if (loading) {
    return (<Loader size="lg" className="mx-5 my-5" />);
  }
  
  return events?.length ?
    (<List bordered hover autoScroll={true}>
      {events.map(event =>
        <EventListItem key={event.id} event={event} onClick={() => selectEvent(event.id)}></EventListItem>)}
    </List>)
    : <span>No items to show.</span>

}
