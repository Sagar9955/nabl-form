"use client"
import "./FormFooter.css"

function FormFooter({ formData, handleInputChange }) {
  return (
    <div className="form-footer">
      <div className="decision-section">
        <div className="form-group">
          <label htmlFor="decisionRequired">Decision of Pass/fail is required on test report?:</label>
          <select
            id="decisionRequired"
            name="decisionRequired"
            value={formData.decisionRequired}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="customerRepInfo">Customer Representative Name, contact no. & sign:</label>
          <input
            type="text"
            id="customerRepInfo"
            name="customerRepInfo"
            value={formData.customerRepInfo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sampleCheckedBy">Sample Checked & inwarded by:</label>
          <input
            type="text"
            id="sampleCheckedBy"
            name="sampleCheckedBy"
            value={formData.sampleCheckedBy}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="labRemark">Lab Remark:</label>
          <textarea
            id="labRemark"
            name="labRemark"
            value={formData.labRemark}
            onChange={handleInputChange}
            className="form-control"
            rows={2}
          />
        </div>
      </div>

      <div className="lab-notes">
        <p className="clerk-title">Laboratory coding clerk</p>
        <p className="note-title">Note:</p>
        <ol className="note-list">
          <li>Lab selects the appropriate method which is capable of meeting customer requirements.</li>
          <li>Any differences regarding the requirements are to be resolved before commencing the test.</li>
        </ol>
      </div>

      <div className="form-footer-info">
        <div className="footer-row">
          <div className="footer-col">
            <p>Prepared and Issued by</p>
            <p>Quality Manager</p>
          </div>
          <div className="footer-col">
            <p>Issue date</p>
            <p>01.03.2020</p>
          </div>
          <div className="footer-col">
            <p>Revision:002</p>
          </div>
          <div className="footer-col">
            <p>Reviewed & Approved by</p>
            <p>Technical Manager</p>
          </div>
        </div>
        <div className="form-code">TCSL/QF7.1/QF-01</div>
      </div>
    </div>
  )
}

export default FormFooter

