import React from 'react'

function UploadDocs() {
  return (
    <div>
<div className="panel">
        <h4>Upload Mandatory Documents</h4>
        <div className="file-input">
          <label htmlFor="certificate">
            <Button
              variant="contained"
              component="label"
              disabled={!selectedFiles.certificate}
              startIcon={<CloudUploadIcon />}
            >
              Upload Certificate of Incorporation
              <input
                id="certificate"
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={(event) => handleFileChange(event, 'certificate')}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
          <Button
            variant="contained"
            disabled={!selectedFiles.certificate}
            onClick={() => handleUpload('certificate')}
          >
            Upload
          </Button>
        </div>
        <div className="file-input">
          <label htmlFor="taxRegistration">
            <Button
              variant="contained"
              component="label"
              disabled={!selectedFiles.taxRegistration}
              startIcon={<CloudUploadIcon />}
            >
              Upload Tax Registration
              <input
                id="taxRegistration"
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={(event) => handleFileChange(event, 'taxRegistration')}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
          <Button
            variant="contained"
            disabled={!selectedFiles.taxRegistration}
            onClick={() => handleUpload('taxRegistration')}
          >
            Upload
          </Button>
        </div>
        <div className="file-input">
          <label htmlFor="taxCompliance">
            <Button
              variant="contained"
              component="label"
              disabled={!selectedFiles.taxCompliance}
              startIcon={<CloudUploadIcon />}
            >
              Upload Tax Compliance Certificate
              <input
                id="taxCompliance"
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={(event) => handleFileChange(event, 'taxCompliance')}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
          <Button
            variant="contained"
            disabled={!selectedFiles.taxCompliance}
            onClick={() => handleUpload('taxCompliance')}
          >
            Upload
          </Button>
        </div>
        <div className="file-input">
          <label htmlFor="registeredOffice">
            <Button
              variant="contained"
              component="label"
              disabled={!selectedFiles.registeredOffice}
              startIcon={<CloudUploadIcon />}
            >
              Upload Registered Office
              <input
                id="registeredOffice"
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={(event) => handleFileChange(event, 'registeredOffice')}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
          <Button
            variant="contained"
            disabled={!selectedFiles.registeredOffice}
            onClick={() => handleUpload('registeredOffice')}
          >
            Upload
          </Button>
        </div>
        <div className="file-input">
          <label htmlFor="financialStatements">
            <Button
              variant="contained"
              component="label"
              disabled={!selectedFiles.financialStatements}
              startIcon={<CloudUploadIcon />}
            >
              Upload Financial Statements (if applicable)
              <input
                id="financialStatements"
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={(event) => handleFileChange(event, 'financialStatements')}
                style={{ display: 'none' }}
              />
            </Button>
          </label>
          <Button
            variant="contained"
            disabled={!selectedFiles.financialStatements}
            onClick={() => handleUpload('financialStatements')}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UploadDocs