import EventModel from "../models/Event";
import React from "react";
import { List } from "rsuite";

export interface EventListProps {
  event: EventModel,
  onClick: Function
}

export default (props: EventListProps) => {
  const { event, onClick } = props;
  return (
    <List.Item onClick={onClick} className="cursor-pointer">
          <span className={event.closed ? 'line-through' : ''}>
            {event.title}
          </span>
        </List.Item>
  );
}
