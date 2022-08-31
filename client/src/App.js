import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateTodo from './components/create-todo';
import EditTodo from './components/edit-todo';
import TodosList from './components/todos-list';
import Navbar from './components/Navbar';
import Form from './components/Form'
import './App.css';
import { Footer } from './components/Footer';

class App extends Component {
    render() {
      return (
        <div className="container">
            <h2 className="greeting">It's A Beautiful Day to Get Things Done</h2>
            <BrowserRouter>
            <Navbar />
            <Routes>
             <Route exact path="/" element ={<TodosList/>} />

              <Route exact path="/edit/:id" element={<EditTodo/>} />

             <Route exact path="/create" element ={<CreateTodo/>} />

             <Route exact path="/Form" element={<Form />} />
             </Routes>
             </BrowserRouter>
             <Footer/>
          </div>
      )

    }
  }
  export default App;

