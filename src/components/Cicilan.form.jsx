import React from "react";

function CicilanForm(props) {
  return (
    <form className="p-3" onSubmit={props.onSubmit}>
      <div className="row">
        <label
          htmlFor="nominal-pokok"
          className="col-sm-3 col-form-label text-start"
        >
          Nominal pokok
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="nominal-pokok"
            name="nominal-pokok"
            min={0}
          />
        </div>
      </div>
      <div className="row mt-3">
        <label htmlFor="bunga" className="col-sm-3 col-form-label text-start">
          Bunga (%)
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="bunga"
            name="bunga"
            min={0}
            step={0.1}
          />
        </div>
      </div>
      <div className="row mt-3">
        <label htmlFor="periode" className="col-sm-3 col-form-label text-start">
          Periode (bln)
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="periode"
            name="periode"
            min={1}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3 w-100">Hitung</button>
    </form>
  );
}

export default CicilanForm;
