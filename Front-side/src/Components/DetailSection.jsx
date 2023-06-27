import React, { useState } from "react";

const DetailSection = () => {
  const [rows, setRows] = useState([
    {
      sr_no: 1,
      item_code: "",
      item_name: "",
      description: "",
      qty: "",
      rate: "",
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      sr_no: rows.length + 1,
      item_code: "",
      item_name: "",
      description: "",
      qty: "",
      rate: "",
    };
    setRows([...rows, newRow]);
    console.log(rows);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
    console.log("aaaaaaaaa");
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">DETAIL</h2>
      {rows.map((row, index) => (
        <div key={index} className="flex mb-4">
          <div className="w-1/5 pr-4">
            <label
              htmlFor={`item_code_${index}`}
              className="block mb-2 text-gray-700"
            >
              Item Code:
            </label>
            <input
              type="text"
              id={`item_code_${index}`}
              name={`item_code_${index}`}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={row.item_code}
              onChange={(e) => handleChange(index, "item_code", e.target.value)}
              required
            />
          </div>
          <div className="w-1/5 pr-4">
            <label
              htmlFor={`item_name_${index}`}
              className="block mb-2 text-gray-700"
            >
              Item Name:
            </label>
            <input
              type="text"
              id={`item_name_${index}`}
              name={`item_name_${index}`}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={row.item_name}
              onChange={(e) => handleChange(index, "item_name", e.target.value)}
              required
            />
          </div>
          <div className="w-2/5 pr-4">
            <label
              htmlFor={`description_${index}`}
              className="block mb-2 text-gray-700"
            >
              Description:
            </label>
            <input
              type="text"
              id={`description_${index}`}
              name={`description_${index}`}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={row.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              required
            />
          </div>
          <div className="w-1/5">
            <label
              htmlFor={`qty_${index}`}
              className="block mb-2 text-gray-700"
            >
              Qty:
            </label>
            <input
              type="number"
              id={`qty_${index}`}
              name={`qty_${index}`}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              step="0.001"
              value={row.qty}
              onChange={(e) => handleChange(index, "qty", e.target.value)}
              required
            />
          </div>
          <div className="w-1/5 pr-4">
            <label
              htmlFor={`rate_${index}`}
              className="block mb-2 text-gray-700"
            >
              Rate:
            </label>
            <input
              type="number"
              id={`rate_${index}`}
              name={`rate_${index}`}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              step="0.01"
              value={row.rate}
              onChange={(e) => handleChange(index, "rate", e.target.value)}
              required
            />
          </div>
          {index === rows.length - 1 && (
            <div className="w-1/5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddRow}
              >
                Add Row
              </button>
            </div>
          )}
          {index !== 0 && (
            <div className="w-1/5">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRemoveRow(index)}
              >
                Remove Row
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailSection;
