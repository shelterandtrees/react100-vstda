import React, {Component} from 'react';

class List extends Component {
    render () {
        return (
            <div>
                <div className='panel panel-default'>
                    <div className='panel-heading'>View Todo Items</div>
                    <div className='panel-body'>
                        {this.props.id === 0 ?
                        (<p>Welcome! Start by adding to-do.</p>)
                        
                        :

                        (<div>
                        <ul className='list-group list-group-flush'>
                            {this.props.todos.map(todo => {
                                return <li key={todo.id} className={todo.priority === "1" ? 'list-group-item list-group-item-success' :
                                todo.priority === '2' ? 'list-group-item list-group-item-warning': 'list-group-item list-group-item-danger'}>
                                <input type='checkbox' />{todo.text}<a role='button' className='edit-todo glyphicon glyphicon-edit pull-right' onClick={this.props.handleEdit}/>
                                <a role='button' className='delete-todo glyphicon glyphicon-trash pull-right' onClick={this.props.handleDelete} style={{marginRight: '8px'}} /></li>
                            })}
                        </ul>
                        </div>)
                        }
                    </div>
                </div>
            </div>
                
            )  
        }
    }
     
export default List;
     

                    // (<div>
                    //     <ul className='list-group list-group-flush'>
                    //         {/* {this.props.todos.map(todo => { */}
                    //         <div key={this.props.id} className={this.props.priority === '1' ? 'list-group-item list-group-item-success' :
                    //             this.props.priority === '2' ? 'list-group-item list-group-item-warning' : 'list-group-item list-group-item-danger'}>
                    //                 <textarea name='text' className='update-todo-text form-control' onChange={this.props.handleChange} value={this.props.text}></textarea>
                    //             <select className='form-control' onChange={this.props.handleChange} name='priority' value={this.props.priority}>
                    //                 <option>Change Priority Level</option>
                    //                 <option value="1">High Priority</option>
                    //                 <option value="2">Medium Priority</option>
                    //                 <option value="3">Low Priority</option>
                    //             </select>
                    //             <button className='update-todo btn btn-success' onClick={this.props.handleSave}>Save</button>
                    //             {/* {this.props.todos.map(todo => { */}
                    //                  <li key={this.props.id} onChange={this.handleChange} className={this.props.priority === '1' ? 'list-group-item list-group-item-success' :
                    //                 this.props.priority === '2' ? 'list-group-item list-group-item-warning' : 'list-group-item list-group-item-danger'}>
                    //                 <input type='checkbox' />{this.props.text}<a role='button' className='edit-todo glyphicon glyphicon-edit pull-right' onClick={this.props.handleEdit}/>
                    //                 <a role='button' className='delete-todo glyphicon glyphicon-trash pull-right' onClick={this.handleDelete} style={{marginRight: '8px'}} /></li>
                    //             {/* })} */}
                    //         </div>
                    //     </ul>
                    //     </div>)}


                    //     (<div>
                    // {this.props.priority === '1' ? 
                    //     (<div className='list-group-item list-group-item-success'></div>) : this.props.priority === '2'
                    //     ? (<div className='list-group-item list-group-item-warning'></div>) :
                    //     (<div className='list-group-item list-group-item-danger'></div>)}
                    // <textarea name='text' className='form-control' onChange={this.props.handleChange} value={this.state.newText}></textarea>
                    // <select className='form-control' onChange={this.props.handleChange} name='priority'>
                    //     <option>Change Priority Level</option>
                    //     <option value="1">High Priority</option>
                    //     <option value="2">Medium Priority</option>
                    //     <option value="3">Low Priority</option>
                    // </select>
                    // <button className='update-todo btn btn-success' onClick={this.props.handleSave}>Save</button>
                    // <ul className='list-group list-group-flush'>