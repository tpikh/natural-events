import React from 'react';

import EventListContainer from './cotnainers/EventListContainer';
import FilterPanelContainer from './cotnainers/FilterPanelContainer';
import EventDetailContainer from './cotnainers/EventDetailContainer';

import './App.scss';


function App() {
  return (
    <div className="container app h-screen mx-auto">
      <header>
        <h1 className="text-5xl">Natural events</h1>

      </header>
      <div className="list">
        <FilterPanelContainer className="mb-2"></FilterPanelContainer>
        <EventListContainer></EventListContainer>
      </div>
      <div className="detail">
        <EventDetailContainer className="h-full w-full"></EventDetailContainer>
      </div>
      <footer></footer>
    </div>

  );
}

export default App;
