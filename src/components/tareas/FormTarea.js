import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import { v4 as uuidv4 } from 'uuid'

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  const tareasContext = useContext(tareaContext)
  const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext



  //state del fomulario
  const [tarea, guardarTarea] = useState({
    nombre: '',
  })

  //extraer nombre del proyecto
  const { nombre } = tarea
  //si no hay proyecto seleccionado
  if (!proyecto) return null
  //array destrcturing para extraer el pryecto actual
  const [proyectoActual] = proyecto

  //Leer los valores del fomulario
  const handlerChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    //validar tarea
    if (nombre.trim() === '') {
      validarTarea()
      return
    }

    //agregar nueva tarea al state de tarea
    tarea.proyectoId = proyectoActual.id
    tarea.id=uuidv4()
    tarea.estado = false
    agregarTarea(tarea)

    //obtener y filtrar tareas del proyecto actual
    obtenerTareas(proyectoActual.id)

    //reiniciar formulario
    guardarTarea({
      nombre: ''
    })
  }




  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handlerChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
    </div>
  )
}

export default FormTarea
