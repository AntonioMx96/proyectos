import React, { useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext)
  const tareasContext = useContext(tareaContext)
  const {
    proyecto,
    eliminarProyecto
  } = proyectosContext

  //obtener las tareas del proyecto
  const {tareasproyecto} = tareasContext

  //si no hay proyecto seleccionado
  if(!proyecto) return <h2>No hay proyecto seleccionado</h2>

  //array destrcturing para extraer el pryecto actual
  const [proyectoActual] = proyecto

  return (
    <>
      <h1>Proyecto: {proyectoActual.nombre}</h1>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0
          ? (<li className="tarea"><li>No hay tareas</li></li>)
          : tareasproyecto.map(tarea =>
            <Tarea
              key={tarea.id}
              tarea={tarea}
            />
          )
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick = {() =>{eliminarProyecto(proyectoActual.id)}}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  )
}

export default ListadoTareas
