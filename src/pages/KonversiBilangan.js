import React, { Component } from 'react';
import KonversiBilanganForm from '../components/KonversiBilangan.form';
import { konversiBilanganFormula } from '../DummyAPI'

class KonversiBilangan extends Component {
    constructor() {
        super()
        this.state = {
            from: 2,
            bilangan: null,
            to: 2,
            hasil: undefined
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.reverseHandler = this.reverseHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault();

        const from = document.getElementById('from').value
        const to = document.getElementById('to').value
        const bilangan = document.getElementById('bilangan').value

        this.setState({ hasil: konversiBilanganFormula(from, bilangan, to), from, to, bilangan })
    }

    reverseHandler(event) {
        event.preventDefault();

        const newState = {
            from: this.state.to,
            to: this.state.from,
            bilangan: this.state.hasil ? this.state.hasil : this.state.bilangan,
            hasil: this.state.hasil ? this.state.bilangan : this.state.hasil
        }

        console.log(newState)

        document.getElementById('from').value = newState.from
        document.getElementById('to').value = newState.to
        document.getElementById('bilangan').value = newState.bilangan
        if (document.getElementById('hasil')) document.getElementById('hasil').value = newState.hasil

        this.setState(newState)
    }

    changeHandler(field) {
        this.setState(field)
    }

    render() {
        return (
            <div className="container d-flex align-items-center">
                <div className="d-flex w-100 justify-content-center">
                    <div className="d-flex w-50 p-2 mt-5 flex-column text-center rounded-3 border border-1">

                        <h1 className='p-3 bg-danger text-light rounded-3'>Konversi bilangan</h1>

                        <KonversiBilanganForm onSubmit={this.submitHandler} onChange={this.changeHandler} onReverse={this.reverseHandler} />

                        {
                            this.state.hasil ?
                                <>
                                    <hr />
                                    <div className="hasil bg-light rounded-3 p-3">
                                        <div className="mb-3">
                                            <h4>Hasil</h4>
                                            <input className="form-control" id="hasil" type="text" value={this.state.hasil} aria-label="readonly input example" readOnly></input>
                                        </div>
                                    </div>
                                </>
                                : ""
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default KonversiBilangan;