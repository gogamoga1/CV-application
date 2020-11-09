import React from 'react'

const Practical = ({ formData, setFormData, htmlready, editable, className }) => {
  const inputHandler = (e, property) => {
    setFormData({ ...formData, [property]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    htmlready((prevState) => !prevState)
  }

  return (
    <div className={className ? `${className} form-container` : `form-container`}>
      <form onSubmit={submitHandler}>
        <label htmlFor="company-name">
          Company name
          <input
            id="company-name"
            placeholder="Your company name.."
            onChange={(e) => inputHandler(e, 'companyName')}
            disabled={editable}
          />
        </label>
        <label htmlFor="position-title">
          Position title
          <input
            id="position-title"
            placeholder="Your position title.."
            onChange={(e) => inputHandler(e, 'positionTitle')}
            disabled={editable}
          />
        </label>
        <label htmlFor="main-tasks">
          Your main tasks
          <textarea
            id="main-tasks"
            rows="5"
            cols="33"
            onChange={(e) => inputHandler(e, 'mainTasks')}
            disabled={editable}
          />
        </label>
        <label htmlFor="date-working">
          From and until you worked for that company
          <input
            id="date-working"
            type="date"
            onChange={(e) => inputHandler(e, 'workingDate')}
            value={formData.workingDate}
            disabled={editable}
          />
        </label>
        <button>{!editable ? 'Submit' : 'Edit'}</button>
      </form>
    </div>
  )
}

export default Practical
