import React, { Component } from 'react';
import axios from 'axios';
let id

export default class EditTodo extends Component {



//initial state
    constructor(props) {
        super(props);

        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this)
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this)
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            task_title: '',
            task_description: '',
            task_completed: false
        }
    }


    componentDidMount () {
        axios.get(`http://localhost:5000/todos/:id`, function (req, res) {
            console.log(req.params)})
        // const {id} = req.params.id
            // ('https://this.props.id')
        .then((req, res) => {
            console.log('success')
            // this.setState({
            //     task_title: response.data.task_title,
            //     task_description: response.data.task_description,
            //     task_completed: response.data.task_completed
            // })
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    //more event handler functions!
    //reset the state for the task_title property

onChangeTodoTitle(e) {
    this.setState({
        task_title: e.target.value
    })
}

onChangeTodoDescription(e) {
    this.setState({
        task_description: e.target.value
    })
}


onChangeTodoCompleted(e){
    this.setState({
        task_completed: !this.state.task_completed
    })
}

onSubmit(e) {
    e.preventDefault();
    //defining which data will be sent to the backend
    const obj = {
        task_title: this.state.task_title,
        task_description: this.state.task_description,
        task_completed: this.state.task_completed

    };

    //sending post request to the backend
    //and concatenating my string with the ID of whatever is the current
    //task being updated
    axios.put('http://localhost:5000/todos/update/:id', function (req, res) {
        console.log(req.params)})
    // ('https://this.props.id')
    .then(res => console.log(res.data));

    //when the update is done it will take the user back to viewing the
    //entire to do list

    // this.props.history.navigate('/');

}

    render() {
        return (
            <div>
                <h3>Edit To Do List</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.task_title}
                        onChange={this.onChangeTodoTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.task_description}
                        onChange={this.onChangeTodoDescription}
                        />
                        </div>
                        <div className="form-group">
                        <label>Description: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.task_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                        <div className="form=check">
                            <input type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            onChange={this.onChangeTodoCompleted}
                            checked={this.state.task_completed}
                            value={this.state.task_completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Complete
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="button button-primary"></input>
                        </div>
                </form>
            </div>
        )
    }

}