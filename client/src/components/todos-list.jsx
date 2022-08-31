import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

//Todo component
const Todo = props => (
    <tr>
        <td className={props.todo.task_completed ? 'completed' : '' }>{props.todo.task_title}</td>
        <td className={props.todo.task_completed ? 'completed' : '' }>{props.todo.task_description}</td>
        <td>
        <Link to={"/edit/"+props.todo._id}>Edit Task</Link>
        </td>
    </tr>

   
)

export default class TodosList extends Component {


    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    todoList() {
        //iterating over the todos state using mapping
        //the callback function has parameters meaning the current task/todo
        //and the index is the 2nd parameter
        return this.state.todos.map(function(currentTodo, i) {
            //todo component being passed through the prop of currentTodo
            return <Todo todo={currentTodo} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
<tbody>
    { this.todoList() }
</tbody>
                </table>

            </div>
        )
    }
}