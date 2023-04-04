import React, { Component } from 'react';
import './App.css';
import CurrentDate from './components/Header';
import Task from './components/Task';
/* Class Component - App */
export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='todo-container'>
          {/* Stateless Component - CurrentDate*/}
          <CurrentDate />
          {/* Functional component with hooks - Task */}
          <Task />
        </div>
      </div>
    )

  }
}