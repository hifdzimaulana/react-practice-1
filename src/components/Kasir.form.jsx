import React from "react";

function KasirForm(props) {
  return (
    <form className="p-3" onSubmit={props.onSubmit}>
      <div className="row">
        <label htmlFor="harga" className="col-sm-3 col-form-label text-start">
          Harga
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="harga"
            name="harga"
            min={0}
          />
        </div>
      </div>
      <div className="row mt-3">
        <label htmlFor="pajak" className="col-sm-3 col-form-label text-start">
          PPN (%)
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="pajak"
            name="pajak"
            min={0}
            step={0.1}
          />
        </div>
      </div>
      <div className="row mt-3">
        <label htmlFor="diskon" className="col-sm-3 col-form-label text-start">
          Diskon (%)
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="diskon"
            name="diskon"
            min={0}
            step={0.1}
          />
        </div>
      </div>
      <button className="btn btn-info mt-3 w-100">Checkout</button>
    </form>
  );
}

export default KasirForm;
