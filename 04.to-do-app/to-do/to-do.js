const fs = require('fs');

let toDoList = [];

const create = ( description ) => {

    let toDo = {
        description,
        completed : false
    }

    toDoList.push( toDo );
}