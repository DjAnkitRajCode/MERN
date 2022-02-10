import React, { Component } from 'react';
import logo from './logo1.png';
import "./App.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }

  addIteam(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list, 
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(iteam =>iteam.id !== id);
    this.setState({list: updatedlist})
  }

  updatedInput(input){
    this.setState({newItem: input});
  }

  render(){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">GENESIS</h1>
        <div className="container">
          Add an Item...
          <br />
          <input 
            type="text" 
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={e => this.updatedInput(e.target.value)}
          />
          <button 
          className="add-btn"
          onClick={()=>this.addIteam(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add Todo</button>
          <div>
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Record Youtube Videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;