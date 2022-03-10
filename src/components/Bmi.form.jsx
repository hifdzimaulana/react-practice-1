import React from "react";

function BmiForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-floating mb-2">
        <input
          type="number"
          min={1}
          step={0.5}
          className="form-control"
          id="berat"
          name="berat"
          placeholder="berat"
        />
        <label htmlFor="berat">Berat (Kg)</label>
      </div>
      <div className="form-floating mb-2">
        <input
          type="number"
          min={1}
          step={0.5}
          className="form-control"
          id="tinggi"
          name="tinggi"
          placeholder="tinggi"
        />
        <label htmlFor="tinggi">Tinggi (cm)</label>
      </div>
      <button className="btn btn-success w-100">Hitung</button>
    </form>
  );
}

export default BmiForm;
