import React from "react";

const ButtonLine = ({ resetAll, order, setOrder }) => {
  return (
    <div>
      <select
        className="act-button"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="input">sort by input order</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed status</option>
      </select>

      <button className="reset-button" onClick={resetAll}>
        clear list
      </button>
    </div>
  );
};

export default ButtonLine;
