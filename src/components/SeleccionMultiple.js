import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();

    state = {
        selecionados: '',
    }

    mostrarMultiples = (e) => {
        e.preventDefault();

        let options = this.selectMultiple.current.options;
        let datos = '';

        for (var option of options) {
            if (option.selected == true) {
                datos += option.value + ' ';
            }
        }

        this.setState({
            selecionados: datos,
        })
    }

    render() {
        return (
            <div>
                <h1>Seleccion Multiple</h1>
                <h2>{this.state.selecionados}</h2>
                <form onSubmit={this.mostrarMultiples}>
                    <select size={12} multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                        <option>Elemento 8</option>
                        <option>Elemento 9</option>
                        <option>Elemento 10</option>
                        <option>Elemento 11</option>
                        <option>Elemento 12</option>
                    </select>
                    <button>Mostrar Seleccionados</button>
                </form>
            </div>
        )
    }
}
