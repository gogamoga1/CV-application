import React from 'react'

const Educational = ({formData, setFormData, htmlready, editable, className}) => {



  const inputHandler = (e, property) => {
    setFormData({ ...formData, [property]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    htmlready((prevState) => !prevState )
  }
  return (
    <div className={className ? `${className} form-container` : `form-container`}>
      <form onSubmit={submitHandler} >
       <div className='test'> <label htmlFor="school-name">
          School name
          <input
            id="school-name"
            value={formData.schoolName}
            onChange={(e) => inputHandler(e, 'schoolName')}
            placeholder="Your school name.."
            disabled={editable}
          />
        </label></div>
        <label htmlFor="study-title">
          Title of study
          <input
            id="position-title"
            value={formData.studyTitle}
            onChange={(e) => inputHandler(e, 'studyTitle')}
            placeholder="Your position title.."
            
            disabled={editable}

          />
        </label>
        <label htmlFor="date-study">
          Date of study
          <input
            id="date-working"
            type="date"
            value={formData.studyDate}
            onChange={(e) => inputHandler(e, 'studyDate')}
            
            disabled={editable}

          />
        </label>
        <button>{!editable ? 'Submit' : 'Edit'}</button>
      </form>
    </div>
  )
}

export default Educational
