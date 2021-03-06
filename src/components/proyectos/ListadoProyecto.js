import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyecto = () => {

  //extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext)
  const { proyectos, obtenerProyectos } = proyectosContext

  //obeteener proyectos cuanda carga el componente
  useEffect(() => {
    obtenerProyectos()
  }, [])

  //si proyectos tiene contenido
  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

    return (
    <ul className="listado-proyectos">
      {
        proyectos.map(proyecto => (
          <Proyecto
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))
      }
    </ul>
  )
}

export default ListadoProyecto
