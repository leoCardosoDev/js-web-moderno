import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        this.setState({
            tipo: e.target.value
        })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input onChange={this.setTipo} type="text" placeholder="Tipo..." value={tipo} /><br />
                <input onChange={this.setNome} type="text" placeholder="Nome..." value={nome} />
            </div>
        )
    }

}