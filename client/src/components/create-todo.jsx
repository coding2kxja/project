import React, { Component } from 'react';
import axios from 'axios';


export default class CreateTodo extends Component {

    constructor (props) {
        super(props);

    //setting state for my component
    // the state object contains all the properties from my 
    //Schema model

    //bounding my methods to the object so i can access the state with in my methods

    this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



        this.state= {
            task_title: '',
            task_description: '',
            task_completed: false
        }

    }

    //these methods will update my state object with ^ those values
    //and will be inputted by the user

    //the onChange event will update my component state for
    //the title

    onChangeTodoTitle(e) {
        this.setState({
            task_title: e.target.value
        });
    }

    //the onChange event will update my component state for
    //the description

    onChangeTodoDescription(e) {
        this.setState({
            task_description: e.target.value
        });
    }


    //the onChange event will update my component state for
    //the completion/submit part of the form

    onSubmit(e) {
        e.preventDefault();

        //form logic

        console.log(`Form has been submitted!:`)
        console.log(`Task Title: ${this.state.task_title}`);
        console.log(`Task Description: ${this.state.task_description}`);
        console.log(`Task Completion Status: ${this.state.task_completed}`)
        
        //to do object for the form values

        const newTask = {
            task_title: this.state.task_title,
            task_description: this.state.task_description,
            task_completed: this.state.task_completed
        }

        //calling my POST endpoint containing the url for adding
        //a task to the to do list
        //inserting data into the database
        axios.post("http://localhost:5000/todos/add", newTask)
        .then(res => console.log(res.data))

        //resetting to initial state
        this.setState({
            task_title: '',
            task_description: '',
            task_completed: false
        })
    }


    render() {
        return (
            <div>
                <h3>Create New Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.task_title}
                                onChange={this.onChangeTodoTitle}
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
                        <div className="form-group">
                            <input type="submit" value="Create Task" className="button button-primary" />
                        </div>

                </form>

            </div>
        )
    }

}