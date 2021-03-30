import React, { useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
  // obtener el state del formulario
  const proyectosContext = useContext(proyectoContext)
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError
  } = proyectosContext

  //state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  })

  const { nombre } = proyecto

  //lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  //cuando el susuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault()

    //validar proyecto
    if (nombre === '') {
      mostrarError()
      return;
    }

    //agregar al state
    agregarProyecto(proyecto)

    //reiniciarl el Form
    guardarProyecto({
      nombre: ''
    })
  }

  const mostrarFormularioOnClick = () => {
    mostrarFormulario()
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={mostrarFormularioOnClick}
      >Nuevo Proyecto</button>

      {
        formulario
          ?
            (
              <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
              >
                <input
                  type="text"
                  className="input-text"
                  placeholder="Nombre Proyecto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeProyecto}
                />
                <input
                  type="submit"
                  className="btn btn-block btn-primario"
                  value="Agregar Proyecto"
                />
              </form>
            )
          : null }
      {errorformulario ? <p className="mensaje error">El nombre del proyecto es abligatorio</p> :null}

    </>
  )
}

export default NuevoProyecto
