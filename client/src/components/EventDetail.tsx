import EventModel from "../models/Event";
import React from "react";
import { Loader, Panel } from "rsuite";

export interface EventDetailData {
    event?: EventModel | null,
    loading: boolean
}

export interface OwnProps {
    className: string;
}

type EventDetailProps = EventDetailData & OwnProps

export default class EventDetail extends React.Component<EventDetailProps> {


    render() {
        if (this.props.loading) {
            return (<Loader size="lg" />);
        }
        return this.props.event ?
            (<Panel header={this.props.event.title} shaded className={this.props.className}>
                {this.props.event.description &&
                    <div>
                        <h2>Description</h2>
                        <p>{this.props.event.description}</p>
                    </div>}

                {this.props.event.closed &&
                    <p>Closed on: {this.props.event.closed}</p>
                }
            </Panel>)
            : (<div></div>);
    }
}
