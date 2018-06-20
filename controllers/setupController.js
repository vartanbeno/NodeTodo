var Todos = require("../models/todoModel");

module.exports = function(app) {

    app.get("/api/setupTodos", function(req, res) {

        // seed db
        var starterTodos = [
            {
                username: "vartan",
                todo: "go to gym",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "vartan",
                todo: "do homework",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "vartan",
                todo: "learn node",
                isDone: false,
                hasAttachment: false
            }
        ]

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        })

    })

}