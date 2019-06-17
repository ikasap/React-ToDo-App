import React from 'react';
import CHeader from './components/Header';
import CMain from './components/Main';
import CTodo from './components/todo/ToDo';
import CFooter from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <CHeader pTitle="React.ToDo.App" />
        <CMain>
          <CTodo pTitle="Market" />
        </CMain>
        <CFooter>React.ToDo.App Footer</CFooter>
      </div>
    );
  }
}

export default App;