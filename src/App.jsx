import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import Edit from './Edit';
import { isString } from 'util';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        todos: [],
        id: 0,
        text: '',
        newText: '',
        priority: 0,
        newPriority: 0,
        editEnabled: false,
      };

      this.changeText = this.changeText.bind(this);
      this.updateText = this.updateText.bind(this);
      this.changePriority = this.changePriority.bind(this);
      this.updatePriority = this.updatePriority.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleSave = this.handleSave.bind(this);


  }

  changeText(event) {
    this.setState({text: event.target.value});
  }

  updateText(event) {
    this.setState({newText: event.target.value});
  }

  changePriority(event) {
    this.setState({priority: event.target.value});
  }

  updatePriority(event) {
    this.setState({newPriority: event.target.value});
  }

  handleEdit() {
    this.setState({
      //id: this.state.id,
      editEnabled: true,
      text: this.state.newText
      //priority: this.state.newPriority
    });
  }

  handleAdd() {
    this.setState({
      id: this.state.id + 1,
      newText: this.state.text,
      text: '',
      priority: this.state.priority,
      //todos: [...this.state.todos, {id: this.state.id, text: this.state.text, priority: this.state.priority, editEnabled: false}]
    });
    let todoList = this.state.todos;
    let todo = {id: this.state.id + 1, text: this.state.text, priority: this.state.priority, editEnabled: false};

    todoList.push(todo);
    this.setState({
      todos: todoList
    })


    console.log(this.state.todos.text);
    console.log(this.state.newText);

    //this.state.todos.push({id: this.state.id, text: this.state.text, priority: this.state.priority, editEnabled: this.state.editEnabled, updated: this.state.updated});
  }

  handleDelete(e) {
      let array = [...this.state.todos];
      let index = array.indexOf(e.target.value)
      if (index !== 1) {
        array.splice(index, 1);
        this.setState({todos: array,
        id: this.state.id - 1,})
      }
      console.log(array);
      console.log(this.state.todos);
  }

  handleSave(index) {
    let array = [...this.state.todos];
    //let index = array.indexOf(e.target.value)
    //let updateTodo = array[index];
    let todo = {id: this.state.id, text: this.state.newText, priority: this.state.newPriority, editEnabled: false};
    if (index !== 1) {
      array.splice(index, 1);
      array.push(todo);
      this.setState({
        todos: array,
        editEnabled: false
      })
    //console.log(array.text);
    }
    console.log(this.state.text);
  }
 
  render() {
    return (
      <div className='container'>
        

        <Add 
        text={this.state.text}
        handleAdd={this.handleAdd}
        changeText = {this.changeText}
        changePriority = {this.changePriority}
        />

        {!this.state.editEnabled &&
        <List 
        todos={this.state.todos}
        //key={this.state.id}
        id={this.state.id}
        changeText={this.changeText}
        changePriority={this.changePriority}
        newText={this.state.newText}
        priority={this.state.priority}
        newPriority={this.state.newPriority}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
        }
        
        {this.state.editEnabled &&
        // this.state.todos.map(todo => (
        <Edit
        todos={this.state.todos}
        key={this.state.id}
        id={this.state.id}
        handleEdit={this.handleEdit}
        changeText={this.changeText}
        changePriority={this.changePriority}
        edit={this.state.editEnabled}
        newText={this.state.newText}
        priority={this.state.priority}
        handleSave={this.handleSave}
        handleDelete={this.handleDelete}
        updateText={this.updateText}
        updatePriority={this.updatePriority}
        />
        // ))}
        }
      </div>
    );
  }
}

export default App;
