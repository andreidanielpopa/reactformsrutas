import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    selectNumero = React.createRef();

    state = {
        listaoperacion: [],
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    calcularTabla = (e) => {
        e.preventDefault();
        let numero = parseInt(this.selectNumero.current.value);
        let auxoperacion = []
        for (var i = 1; i <= 10; i++) {
            auxoperacion.push(numero + ' x ' + i + ' = ' + numero * i);
        }
        this.setState({
            listaoperacion: auxoperacion,
        })
    }
    render() {
        return (
            <div>
                <h1>Tabla de Multiplicar</h1>

                <form>
                    <label>Numero: </label>
                    <select ref={this.selectNumero} onClick={this.calcularTabla}>
                        {this.state.numeros.map((num, index) => {
                            return(<option key={index} value={num}>{num}</option>)
                        })}
                    </select>
                    
                </form>

                {this.state.listaoperacion.map((operacion, index) => {
                    return (<p key={index}>{operacion}</p>)
                })}

            </div>
        )
    }
}
