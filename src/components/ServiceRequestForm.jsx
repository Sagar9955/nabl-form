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

  return (
    <div className="service-request-form">
      <form onSubmit={handleSubmit}>
        <FormHeader />

        <CustomerInfo formData={formData} handleInputChange={handleInputChange} />

        <SampleTable sets={formData.sets} handleInputChange={handleInputChange} />

        <FormFooter formData={formData} handleInputChange={handleInputChange} />

        <div className="form-submit">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ServiceRequestForm

