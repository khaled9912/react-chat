import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];



class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  constructor(props){
    super(props);
    this.addItem=this.addItem.bind(this);
    this.state={
        messages:[],
    }
  }
  addItem(newMessage){
    this.setState((prevState)=>({
        messages:[...prevState.messages,newMessage],
    }));

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chat</h1>
        </header>
        <div className="container">
          {users.map((user)=>(
        <ChatWindow
        user={user}
        messages={this.state.messages}
        onAddItem={this.addItem}

        />
        ))}
          
         
        </div>
      </div>
    );
  }
}

export default App;
