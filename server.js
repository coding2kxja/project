//server.js is my entry point

const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const todoRoutes = express.Router();
const PORT = 5000;
const Todo = require('./server/models/todo.model')


// //routes
// let Todo = require('./server/models/todo.model')


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Successful connection to MongoDB!");
})

// app.get('/', (req, res) => {
//   res.send("Hello world")
// })



// app.listen(PORT, () => console.log(`Listening port: ${PORT}`))

app.listen(process.env.PORT || 5000, () => console.log('server has started'))

//middleware
// app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

//***** use routes ****


// @route GET/todo
// using GET method to display all ToDo's/tasks



todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
      //check for errors
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
      })
    })
  
  //GET method to retrieve ToDo task accoring to its' id
  
    todoRoutes.route('/:id').get(function(req, res) {
      let id = req.params.id;
      Todo.findById(id, function (err, todo) {
        res.json(todo)
      });
    });
  
  
    //POST method to add to the to do list
  
    todoRoutes.route('/add').post(function(req, res) {
      let todo = new Todo(req.body);
      todo.save()
      .then(todo => {
        res.status(200).json({'todo': 'Task added successfully'});
      })
      .catch(err => {
        res.status(400).send('Task unable to be added.')
      })
    })
  

    todoRoutes.route('/update/:id').put(function(req, res) {
      Todo.findByIdAndDelete(req.params.id, function(err, todo) {
          if (!todo)
              res.status(404).send("data is not found");
          else
              todo.task_title = req.body.task_title;
              todo.task_description = req.body.task_description;
              todo.task_completed = req.body.task_completed;
              todo.save().then(todo => {
                  res.json('Todo updated!');
              })
              .catch(err => {
                  res.status(400).send("Update not possible");
              });
      });
  });
  

   const updateTodo = (req, res) => {
    try {
      const { id } = req.params
      Todo.findByIdAndUpdate(id, req.body, { new :true} , (err, todo) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!todo) {
          res.status(500).send(err)
        }
        return res.status(200).json(todo)
      })
    } catch (error) {
      return res.status(500).send(error.message)
    }
   }
  
   module.exports = {
    updateTodo
   }





//   //use routes

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});






    // Todo.findByIdAndUpdate(req.params.id, function (err, todo) {
    //   if (!todo) //if task has not been retrieved
    //   res.status(404).send('Task not found.');
    //   else
    //   todo.task_title = req.body.task_title;
    //   todo.task_description = req.body.task_description;
    //   todo.task_priority = req.body.task_priority
    //   todo.task_completed = req.body.task_completed
  
    //   todo.save().then(todo => {
    //     res.json('Successful update!')
    //     .catch(err => {
    //       res.status(400).send("Unable to update.")
    //     })
    //   })
    // })
  // })