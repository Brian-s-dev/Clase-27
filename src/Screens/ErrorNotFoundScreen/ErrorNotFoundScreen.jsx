import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
  return (
    <div>
        <h1>Ups! Esta pagina no fue encontrada</h1>
        <p>La pagina que estas buscando no existe</p>
        <Link to="/">Volver al Inicio</Link>
    </div>
  )
}
