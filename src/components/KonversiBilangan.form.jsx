import React, { useState } from "react";

function KonversiBilanganForm(props) {
  const [state, setState] = useState({ from: 2 });

  const fromChangeHandler = (event) => {
    setState({ from: event.target.value });
    console.log(state);
  };

  const updateFormState = (event) => {
    if (event.target.id == "from") fromChangeHandler(event);
    props.onChange({ [event.target.id]: event.target.value });
  };

  return (
    <form className="p-3" onSubmit={props.onSubmit} onInput={updateFormState}>
      <div className="row">
        <label htmlFor="from" className="col-sm-3 col-form-label text-start">
          From
        </label>
        <div className="col-sm-9">
          <select
            className="form-select"
            aria-label="Default select example"
            id="from"
            name="from"
          >
            <option value="2">Biner</option>
            <option value="8">Oktal</option>
            <option value="10">Desimal</option>
            <option value="16">Hexadesimal</option>
          </select>
        </div>
      </div>

      <div className="row mt-3">
        <label
          htmlFor="bilangan"
          className="col-sm-3 col-form-label text-start"
        >
          Bilangan
        </label>
        <div className="col-sm-9">
          <input
            type={state.from == 16 ? "text" : "number"}
            className="form-control"
            id="bilangan"
            name="bilangan"
            step="any"
          />
        </div>
      </div>

      <div className="row mt-3">
        <label htmlFor="to" className="col-sm-3 col-form-label text-start">
          To
        </label>
        <div className="col-sm-9">
          <select
            className="form-select"
            aria-label="Default select example"
            id="to"
            name="to"
          >
            <option value="2">Biner</option>
            <option value="8">Oktal</option>
            <option value="10">Desimal</option>
            <option value="16">Hexadesimal</option>
          </select>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-around">
        <button className="btn btn-success mt-3 col-sm-9">Convert</button>
        <button
          className="btn btn-primary mt-3 col-sm-2"
          onClick={props.onReverse}
        >
          🔁
        </button>
      </div>
    </form>
  );
}

export default KonversiBilanganForm;
