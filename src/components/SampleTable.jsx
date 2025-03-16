"use client"
import "./SampleTable.css"

function SampleTable({ sets, handleInputChange }) {
  // Helper function to format field labels
  const formatFieldName = (fieldName) => {
    return fieldName.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
  }

  const tableFields = [
    { id: "sampleDetails", label: "Sample Details" },
    { id: "specificTests", label: "Specific tests/to be performed" },
    { id: "testMethod", label: "Test Method/Reference standard" },
    { id: "castingDate", label: "Casting/ mfg. Date" },
    { id: "grade", label: "Grade" },
    { id: "quantity", label: "Quantity" },
    { id: "sizeDia", label: "Size/ Dia" },
    { id: "brandCompany", label: "Brand/company" },
    { id: "sampleLocation", label: "Sample Location if any" },
    { id: "extractionDate", label: "Extraction Date" },
    { id: "inwardId", label: "Inward ID number" },
  ]

  return (
    <div className="sample-table-container">
      <table className="sample-table">
        <thead>
          <tr>
            <th className="details-header">Details</th>
            {["SET-I", "SET-II", "SET-III", "SET-IV"].map((set, index) => (
              <th key={set} className="set-header">
                {set}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableFields.map((field) => (
            <tr key={field.id}>
              <td className="field-label">{field.label}:</td>
              {[0, 1, 2, 3].map((setIndex) => (
                <td key={setIndex} className="field-input">
                  <input
                    type="text"
                    name={field.id}
                    value={sets[setIndex][field.id]}
                    onChange={(e) => handleInputChange(e, setIndex)}
                    className="table-input"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SampleTable

