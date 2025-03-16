"use client"

import { useState } from "react"
import FormHeader from "./FormHeader"
import CustomerInfo from "./CustomerInfo"
import SampleTable from "./SampleTable"
import FormFooter from "./FormFooter"
import "./ServiceRequestForm.css"

function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    date: "",
    customerName: "",
    officeAddress: "",
    contactNo: "",
    emailId: "",
    gstNo: "",
    siteNameAddress: "",
    sets: Array(4)
      .fill()
      .map(() => ({
        sampleDetails: "",
        specificTests: "",
        testMethod: "",
        castingDate: "",
        grade: "",
        quantity: "",
        sizeDia: "",
        brandCompany: "",
        sampleLocation: "",
        extractionDate: "",
        inwardId: "",
      })),
    decisionRequired: "",
    customerRepInfo: "",
    sampleCheckedBy: "",
    labRemark: "",
  })

  const handleInputChange = (e, setIndex = null) => {
    const { name, value } = e.target

    if (setIndex !== null) {
      // Handle table inputs
      const newSets = [...formData.sets]
      newSets[setIndex] = {
        ...newSets[setIndex],
        [name]: value,
      }

      setFormData({
        ...formData,
        sets: newSets,
      })
    } else {
      // Handle regular inputs
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to a server
  }

  const downloadJSON = () => {
    const jsonData = JSON.stringify(formData, null, 2) // Convert form data to formatted JSON
    const blob = new Blob([jsonData], { type: "application/json" }) // Create a Blob
    const url = URL.createObjectURL(blob) // Create a URL for the blob

    // Create a hidden <a> element to trigger the download
    const link = document.createElement("a")
    link.href = url
    link.download = "ServiceRequestForm.json"
    document.body.appendChild(link)
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const printPage = () => {
    window.print() // Triggers the print dialog
  }

  return (
    <div className="service-request-form">
      <form onSubmit={handleSubmit}>
        <FormHeader />

        <CustomerInfo formData={formData} handleInputChange={handleInputChange} />

        <SampleTable sets={formData.sets} handleInputChange={handleInputChange} />

        <FormFooter formData={formData} handleInputChange={handleInputChange} />

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="download-button" onClick={downloadJSON}>
            Download JSON
          </button>
          <button type="button" className="print-button" onClick={printPage}>
            Print
          </button>
        </div>
      </form>
    </div>
  )
}

export default ServiceRequestForm
