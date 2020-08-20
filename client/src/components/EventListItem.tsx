import EventModel from "../models/Event";
import React from "react";
import { List } from "rsuite";

export interface EventListProps {
  event: EventModel,
  onClick: Function
}

export default class EventListItem extends React.Component<EventListProps> {

  render() {
    return (
      <List.Item onClick={this.props.onClick} className="cursor-pointer">
        <span className={this.props.event.closed ? 'line-through' : ''}>
          {this.props.event.title}
        </span>
      </List.Item>

    );
  }
}