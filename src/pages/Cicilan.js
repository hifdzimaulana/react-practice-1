import React, { Component } from 'react';
import CicilanForm from '../components/Cicilan.form';
import { cicilanFormula } from '../DummyAPI';

class Cicilan extends Component {
    constructor() {
        super()
        this.state = { cicilan: 0 }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault();

        const pokok = document.getElementById('nominal-pokok').value
        const bunga = document.getElementById('bunga').value
        const periode = document.getElementById('periode').value

        this.setState({ cicilan: cicilanFormula(pokok, bunga, periode) })
    }
    render() {
        return (
            <div className="container d-flex align-items-center">
                <div className="d-flex w-100 justify-content-center">
                    <div className="d-flex w-50 p-2 mt-5 flex-column text-center rounded-3 border border-1">
                        <h1 className='p-3 bg-primary text-light rounded-3'>Kalkulator Cicilan</h1>

                        <CicilanForm onSubmit={this.submitHandler} />

                        {
                            this.state.cicilan ?
                                <>
                                    <hr />
                                    <div className="hasil bg-light rounded-3">
                                        <h4 className="text-secondary">Angsuran/bulan</h4>
                                        <h3>{this.state.cicilan}</h3>
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

export default Cicilan;