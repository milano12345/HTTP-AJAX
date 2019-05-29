import React from 'react';
import FriendsList from './components/FriendsList'
import Form from './components/Form'
import './App.css';

function App() {
  onSubmit = (fields) => {
    console.log('App Component got:', fields)
  }
  return (
    <div className="App">
      <FriendsList />
      <Form onSubmit={fields => this.onSubmit(fields)}/>




    </div>
  );
}

export default App;
