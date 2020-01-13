const todosService = require("../services/todosService");

module.exports = {
  getAllTodos: async (req, res, next) => {
    try {
      const todos = await todosService.getAlltodos();
      res.status(200).send(todos);
    } catch (error) {
      next(error);
    }
  },
  completedTodos: (req, res, next) => {
    try {
      todosService.completeTodos(req.body);
      res.status(200).end();
    } catch (error) {
      next(error);
    }
  },
  uncompletedTodos: (req, res, next) => {
    try {
      todosService.uncompleteTodos(req.body);
      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
};
