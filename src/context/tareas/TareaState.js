import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { v4 as uuidv4 } from 'uuid'
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA
} from '../../types'

const TareaState = props => {
  const initialState = {
    tareas:[
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      {  id: uuidv4(),nombre: 'comparar', estado: true, proyectoId: 2 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: false, proyectoId: 3 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: false, proyectoId: 3 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: false, proyectoId: 3 },
      { id: uuidv4(), nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 }
    ],
    tareasproyecto: null,
    errortarea:false
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState)

  //obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  //agreagar una tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  //valida y muestra un error en caso de que sea necesario
  const validarTarea = () =>{
    dispatch({
      type:VALIDAR_TAREA,
    })
  }

  //eliminar tarea por id
  const eliminarTarea = id =>{
    dispatch({
      type:ELIMINAR_TAREA,
      payload:id
    })
  }
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea:state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState
