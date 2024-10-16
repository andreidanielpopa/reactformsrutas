import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();

    state = {
        listanumeros: [],
    }

   
    peticionForm = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let lista = [];
        do {
            if (numero % 2 === 0) {
                numero = numero / 2;
                lista.push(numero);
            } else {
                numero = (numero * 3) + 1;
                lista.push(numero);
            }
        } while (numero !== 1)
        this.setState({
            listanumeros: lista,
        })
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <ul>
                    {this.state.listanumeros.map((numeropintar, index) => {
                        //Nunca debe estar vacio, siempre de contener un return
                        return (<li key={index}>{numeropintar}</li>)
                    })}
                </ul>

                <form onSubmit={this.peticionForm}>
                    <label>Numero: </label>
                    <input type='text' ref={this.cajaNumero}></input><br />
                    <button>
                        Enviar numero
                    </button>
                </form>
            </div>
        )
    }
}
