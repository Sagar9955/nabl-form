"use client"
import "./CustomerInfo.css"

function CustomerInfo({ formData, handleInputChange }) {
  return (
    <div className="customer-info">
      <div className="form-row">
        <div className="form-group date-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group customer-name-group">
          <label htmlFor="customerName">Customer/Company Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="officeAddress">Office Address:</label>
        <input
          type="text"
          id="officeAddress"
          name="officeAddress"
          value={formData.officeAddress}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="form-row three-columns">
        <div className="form-group">
          <label htmlFor="contactNo">Contact No.:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gstNo">GST No.:</label>
          <input
            type="text"
            id="gstNo"
            name="gstNo"
            value={formData.gstNo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="siteNameAddress">Site Name & Address:</label>
        <input
          type="text"
          id="siteNameAddress"
          name="siteNameAddress"
          value={formData.siteNameAddress}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="lab-instruction">
        <p>To,</p>
        <p>Incharge TCS Lab, Charholi</p>
        <p>Kindly test the samples with following details in your lab:</p>
      </div>
    </div>
  )
}

export default CustomerInfo

