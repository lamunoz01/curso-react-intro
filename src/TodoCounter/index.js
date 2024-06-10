// const estilos = {
//     backgroundColor: 'green'
// }
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
    const{
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);
    return(
        // Ejemplo de estilos en linea con React - <h1 style={{
        //     fontSize:'25px',
        //     textAlign: 'center',
        //     margin: 0,
        //     padding:'48px'
        // }}>
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> 
            de <span>{totalTodos}</span> To-Do's
        </h1>
    );
}

export {TodoCounter};