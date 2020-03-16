import React, {Component} from 'react';

const style = {
  color: 'white'
}

class Add extends Component {
    render (){
        return (
        <div>
            <h2 className='header' style={style}>The Very Simple Todo App</h2>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New Todo</div>
          <div className='panel-body'>
        <label htmlFor='add-text'>I want to...</label>
        <textarea id='add-text' name='text' className='form control create-todo-text' value={this.props.text} onChange={this.props.changeText} rows='4'></textarea>
        <label htmlFor='priority'>Priority</label>
        <select id='priority' name='priority' className='form-control create-todo-priority' onChange={this.props.changePriority}>
          <option value='0'>Select the priority</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        </div>
          <div className='panel-footer'>
          <button className='create-todo btn btn-success btn-block' onClick={this.props.handleAdd}>Add</button>
          </div>
        </div>
        </div>
        );
    }
}
export default Add;