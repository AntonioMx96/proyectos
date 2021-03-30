import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {
  //mi state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })
  //extraer usuario
  const {nombre, email, password, confirmar } = usuario

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  //cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.preventDefault()

    //validar que ya no haya campos vacios

    //validar password

    //confirmacion de los paswords

    //pasar la accion uwu
  }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              onChange={onChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Confirma tu Password"
              onChange={onChange}
              value={confirmar}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">Iniciar Sesión</Link>
      </div>
    </div>
  )
}
export default NuevaCuenta
