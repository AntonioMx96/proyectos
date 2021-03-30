import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({proyecto}) => {
  // obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext)
  const tareasContext  = useContext(tareaContext)
  //proyecto context
  const {
    proyectoActual
  } = proyectosContext
  //tarea context
  const {
    obtenerTareas
  } = tareasContext
  //funcion para agregar el proyacto actual
  const seleccionarProyecto = id =>{
    proyectoActual(id)
    obtenerTareas(id)
  }
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick = {()=> seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  )
}

export default Proyecto
