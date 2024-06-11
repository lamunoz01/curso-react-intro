import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// Creamos nuestro propio provider
function TodoProvider({children}) {
  // Aquí va la logica que queramos compartir con los demás componentes
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  }); //Buscar to-dos

  const addTodo=(text)=>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false
    });
    saveTodos(newTodos);
  }
  
  const completarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completarTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
