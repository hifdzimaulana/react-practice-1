import React, { Component } from 'react';

import BmiForm from '../components/Bmi.form';
import { bmiFormula } from '../DummyAPI';

class Baru extends Component {

    constructor() {
        super()

        this.state = {
            index: 0,
            status: ""
        }

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault();

        const berat = document.getElementById('berat').value
        const tinggi = document.getElementById('tinggi').value

        this.setState(bmiFormula(berat, tinggi))
    }

    render() {
        return (
            <div className="container d-flex align-items-center">
                <div className="d-flex w-100 justify-content-center">
                    <div className="d-flex w-50 p-2 mt-5 flex-column text-center">
                        <h1 className='p-3 bg-light rounded-3'>Body Mass Index</h1>

                        <BmiForm onSubmit={this.submitHandler} />



                        {this.state.index && this.state.index ?
                            <>
                                <hr />

                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>{this.state.index}</strong> You are {this.state.status}
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

export default Baru;