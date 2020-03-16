import React, {Component} from 'react';

class Edit extends Component {
    render() {
        return (
            <div>
                <ul className='list-group list-group-flush'>
                    
                        <div className={this.props.priority === '1' ? 'list-group-item list-group-item-success' :
                        this.props.priority === '2' ? 'list-group-item list-group-item-warning' : 'list-group-item list-group-item-danger'}>
                            <textarea name='text' className='update-todo-text form-control' onChange={this.props.updateText} value={this.props.newText}></textarea>
                            <select className='form-control' onChange={this.props.updatePriority} name='priority' value={this.props.newPriority}>
                                <option>Change Priority Level</option>
                                <option value="1">High Priority</option>
                                <option value="2">Medium Priority</option>
                                <option value="3">Low Priority</option>
                            </select>
                            <button className='update-todo btn btn-success' onClick={this.props.handleSave}>Save</button>
                            {this.props.todos.map(todo => {
                                return <li key={todo.id} className={todo.priority === "1" ? 'list-group-item list-group-item-success' :
                                todo.priority === '2' ? 'list-group-item list-group-item-warning': 'list-group-item list-group-item-danger'}>
                                <input type='checkbox' />{todo.text}<a role='button' className='edit-todo glyphicon glyphicon-edit pull-right' onClick={this.props.handleEdit}/>
                                <a role='button' className='delete-todo glyphicon glyphicon-trash pull-right' onClick={this.props.handleDelete} style={{marginRight: '8px'}} /></li>
                                })}
                    </div>
                </ul>
            </div>
        )
    }
}
export default Edit;