import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { v4 as uuidv4 } from 'uuid'
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FOMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types'


const ProyectoState = props => {
  const proyectos = [
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Tienda' },
    { id: 3, nombre: ' Virtual' },
    { id: 4, nombre: 'Tienda Virtual uwu' },
  ]

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null
  }

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //serie de funciones para el Crud
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //obtener proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //agregar nuevo proyecto
  const agregarProyecto = proyecto => {
    proyecto.id = uuidv4()
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  // Valida el formulario
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FOMULARIO,
    })
  }
  //selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId =>{
    dispatch({
      type: PROYECTO_ACTUAL,
      payload:proyectoId
    })
  }
  //elimina un proyecto
  const eliminarProyecto = proyectoId =>{
    dispatch({
      type:ELIMINAR_PROYECTO,
      payload:proyectoId
    })
  }
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState
