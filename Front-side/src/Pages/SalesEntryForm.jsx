import React from "react";
import HeaderSection from "../Components/HeaderSection";
import DetailSection from "../Components/DetailSection";

const SalesEntryForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save the data to the appropriate tables in the database
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <HeaderSection />
        <DetailSection />
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalesEntryForm;
