import React, { Component } from 'react';

import { kasirFormula } from '../DummyAPI';
import KasirForm from '../components/Kasir.form';

class Kasir extends Component {
    constructor() {
        super()
        this.state = {
            hasil: 0
        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault();

        const harga = document.getElementById('harga').value
        const pajak = document.getElementById('pajak').value
        const diskon = document.getElementById('diskon').value

        this.setState({ hasil: kasirFormula(harga, pajak, diskon) })
    }

    render() {
        return (
            <div className="container d-flex align-items-center">
                <div className="d-flex w-100 justify-content-center">
                    <div className="d-flex w-50 p-2 mt-5 flex-column text-center rounded-3 border border-1">

                        <h1 className='p-3 bg-warning text-light rounded-3'>Kasir</h1>

                        <KasirForm onSubmit={this.submitHandler} />

                        {
                            this.state.hasil ?
                                <>
                                    <hr />
                                    <div className="hasil bg-light rounded-3 p-3">
                                        <div class="mb-3">
                                            <h4>Harga akhir</h4>
                                            <input class="form-control" type="text" value={this.state.hasil} aria-label="readonly input example" readonly></input>
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

export default Kasir;