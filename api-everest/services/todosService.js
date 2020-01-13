const TODOS = [
  {
    id: 1,
    todo: "Buy Windows",
    desc: "#DE 8009 Description lorem ipsum lorem ipsum",
    info: "ABC",
    completed: false,
    state: "high-price"
  },
  {
    id: 2,
    todo: "Test",
    desc: "#DE 8009 Description lorem ipsum lorem ipsum",
    info: "QWEr",
    completed: false,
    state: "medium"
  },
  {
    id: 3,
    todo: "Windows",
    desc: "#DE 8009 Description lorem ipsum lorem ipsum",
    info: "ABCde",
    completed: true,
    state: "final"
  },
  {
    id: 4,
    todo: "Buy CARS",
    desc: "#DE 8009 Description lorem ipsum lorem ipsum",
    info: "ASD",
    completed: false,
    state: "high-price"
  },
  {
    id: 5,
    todo: "house",
    desc: "#DE 8009 Description lorem ipsum lorem ipsum",
    info: "ZCXC",
    completed: false,
    state: "medium"
  }
];

module.exports = {
  getAlltodos: async (req, res, next) => {
    try {
      return TODOS;
    } catch (error) {
      throw new Error(error);
    }
  },
  completeTodos: body => {
    try {
      const { id, completed } = body;
      TODOS.forEach(item => {
        if (item.id === id) {
          item.completed = completed;
        }
      });
      io.emit("todos-changed", id);
    } catch (error) {
      throw new Error(error);
    }
  },
  uncompleteTodos: body => {
    try {
      const { id, completed } = body;
      TODOS.forEach(item => {
        if (item.id === id) {
          item.completed = completed;
        }
      });
      io.emit("todos-changed", id);
    } catch (error) {
      throw new Error(error);
    }
  }
};
