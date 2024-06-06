import React from "react";

const TodoContext = React.createContext();

// Creamos nuestro propio provider
function TodoProvider() {
  return <TodoContext.Provider> </TodoContext.Provider>;
} 

export { TodoContext, TodoProvider };
