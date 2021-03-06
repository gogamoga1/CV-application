import React from 'react'

const General = ({ formData, setFormData, htmlready, editable, className }) => {
  const inputHandler = (e, property) => {
    setFormData({ ...formData, [property]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    htmlready((prevState) => !prevState)
  }
  return (
    <div className={className ? `${className} form-container` : `form-container`}>
      <h3 className='block-name'>General information</h3>

      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            placeholder="Your name.."
            onChange={(e) => inputHandler(e, 'name')}
            disabled={editable}
            required
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            placeholder="Your e-mail.."
            onChange={(e) => inputHandler(e, 'email')}
            disabled={editable}
            required
          />
        </label>
        <label htmlFor="tel">
          Telephone
          <input
            type="tel"
            id="tel"
            placeholder="Your telephone.."
            onChange={(e) => inputHandler(e, 'tel')}
            disabled={editable}
            required
          />
        </label>
        <button>{!editable ? 'Submit' : 'Edit'}</button>
      </form>
    </div>
  )
}

export default General
