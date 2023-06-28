/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const HeaderSection = () => {
  const [headerData, setHeaderData] = useState({
    vr_no: 0,
    vr_date: new Date().toISOString().slice(0, 10),
    ac_name: "",
    ac_amt: 0,
    status: "A",
  });

  const handleChange = (field, value) => {
    setHeaderData({ ...headerData, [field]: value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">HEADER</h2>
      <div className="flex mb-4">
        <div className="w-1/3 pr-4">
          <label htmlFor="vr_no" className="block mb-2 text-gray-700">
            VR No:
          </label>
          <input
            type="number"
            id="vr_no"
            name="vr_no"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={headerData.vr_no}
            onChange={(e) => handleChange("vr_no", parseInt(e.target.value))}
            required
          />
        </div>
        <div className="w-1/3 pr-4">
          <label htmlFor="vr_date" className="block mb-2 text-gray-700">
            VR Date:
          </label>
          <input
            type="date"
            id="vr_date"
            name="vr_date"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={headerData.vr_date}
            onChange={(e) => handleChange("vr_date", e.target.value)}
            required
          />
        </div>
        <div className="w-1/3">
          <label htmlFor="ac_name" className="block mb-2 text-gray-700">
            Account Name:
          </label>
          <input
            type="text"
            id="ac_name"
            name="ac_name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={headerData.ac_name}
            onChange={(e) => handleChange("ac_name", e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label htmlFor="ac_amt" className="block mb-2 text-gray-700">
            Account Amount:
          </label>
          <input
            type="number"
            id="ac_amt"
            name="ac_amt"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            step="0.01"
            value={headerData.ac_amt}
            onChange={(e) => handleChange("ac_amt", parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="status" className="block mb-2 text-gray-700">
            Status:
          </label>
          <select
            id="status"
            name="status"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={headerData.status}
            onChange={(e) => handleChange("status", e.target.value)}
            required
          >
            <option value="A">Active</option>
            <option value="I">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
