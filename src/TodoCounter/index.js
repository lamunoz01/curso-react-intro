// const estilos = {
//     backgroundColor: 'green'
// }
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        // Ejemplo de estilos en linea con React - <h1 style={{
        //     fontSize:'25px',
        //     textAlign: 'center',
        //     margin: 0,
        //     padding:'48px'
        // }}>
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> 
            de <span>{total}</span> To-Do's
        </h1>
    );
}

export {TodoCounter};