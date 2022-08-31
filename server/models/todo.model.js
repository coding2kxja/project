//model for what properties my to do list
//will have

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    task_title: {
        type: String
    },
    task_description: {
        type: String

    },
    task_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('Todo', Todo);