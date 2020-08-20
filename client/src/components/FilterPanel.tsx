import React from "react";
import { Button, ButtonToolbar, Drawer, FormGroup, Form, ControlLabel, FormControl, HelpBlock, DateRangePicker, CheckPicker, SelectPicker } from 'rsuite';
import { FilterData } from "../actions";
import SourceModel from "../models/Source";

export interface FilterPanelData {
    from?: Date,
    to?: Date,
    sources: SourceModel[],
    sort: string,

    className: string
}

export interface FilterPanelActions {
    updateFilters: (arg0: FilterData) => any,
    getSources: () => any
}

type FilterPanelProps = FilterPanelData & FilterPanelActions

export interface FilterPanelState {
    showControls: boolean,
    range: [Date?, Date?],
    statuses: string[],
    sources: string[],
    sort: ''
}

const statusData =
    [
        {
            label: "Open",
            value: "open"
        },
        {
            label: "Closed",
            value: "closed"
        }
    ];

const sortOptions = [
    {
        label: "Ascending",
        value: "asc"
    },
    {
        label: "Descending",
        value: "desc"
    }
]


export default class FilterPanel extends React.Component<FilterPanelProps, FilterPanelState> {
    constructor(props: FilterPanelProps) {
        super(props);
        this.state = {
            showControls: false,
            range: [props.from, props.to],
            statuses: [],
            sources: [],
            sort: ""
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.getSources();
    }
    toggleDrawer() {
        this.setState({ showControls: true });
    }
    close() {
        this.setState({
            showControls: false
        });
    }

    submit() {
        this.close();
        this.props.updateFilters({ from: this.state.range[0], to: this.state.range[1], sources: this.state.sources, statuses: this.state.statuses, sort: this.state.sort })
    }

    render() {
        return (
            <div>
                <ButtonToolbar className={this.props.className}>
                    <Button onClick={this.toggleDrawer}>Filters</Button>
                    <Button onClick={this.submit} appearance="primary">Search</Button>
                </ButtonToolbar>
                <Drawer
                    show={this.state.showControls}
                    onHide={this.close}
                >
                    <Drawer.Header>
                        <Drawer.Title>Filters</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>

                        <div className="field mb-4">
                            <ControlLabel>Dates</ControlLabel>
                            <div>
                                <DateRangePicker className="block"
                                    value={this.state.range}
                                    onChange={(value) => {
                                        this.setState({ range: value });
                                    }} />
                            </div>
                        </div>
                        <div className="field mb-4">
                            <ControlLabel>Sources</ControlLabel>
                            <div>
                                <CheckPicker
                                    data={this.props.sources.map(s => { return { label: s.title, value: s.id } })}
                                    onChange={(value) => this.setState({ sources: value })}
                                    value={this.state.sources} />
                            </div>
                        </div>
                        <div className="field mb-4">

                            <ControlLabel>Statuses</ControlLabel>
                            <div>
                                <CheckPicker
                                    data={statusData}
                                    onChange={(value) => this.setState({ statuses: value })}
                                    searchable={false}
                                    value={this.state.statuses} />
                            </div>
                        </div>
                        <div className="field mb-4">
                            <ControlLabel>Sort</ControlLabel>
                            <div>
                                <SelectPicker
                                    data={sortOptions}
                                    onChange={(value) => this.setState({ sort: value })}
                                    searchable={false}
                                    value={this.state.sort} />
                            </div>
                        </div>

                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={this.submit} appearance="primary">Search</Button>
                        <Button onClick={this.close} appearance="subtle">Cancel</Button>
                    </Drawer.Footer>
                </Drawer >
            </div >
        );
    }
}