import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/cine'>Cine</a>
            </li>
            <li>
                <a href='/musica'>Musica</a>
            </li>
            <li>
                <a href='/form'>Form</a>
            </li>
            <li>
                <a href='/collatz'>Collatz</a>
            </li>
            <li>
                <a href='/tabla'>Tabla Multiplicar</a>
            </li>
            <li>
                <a href='/seleccion'>Seleccion Multiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
