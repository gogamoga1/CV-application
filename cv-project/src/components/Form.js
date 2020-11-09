import React, { useState } from 'react'
import General from './General'
import Practcal from './Practical'
import Educational from './Educational'
import CV from './CV'

const Form = () => {
  const [htmlReady1, setHtmlready1] = useState(false)
  const [htmlReady2, setHtmlready2] = useState(false)
  const [htmlReady3, setHtmlready3] = useState(false)
  const [color, setColor] = useState(false)

  const [showCV, setshowCV] = useState(false)

  const [generalData, setGeneralData] = useState({
    name: '',
    email: '',
    tel: ''
  })

  const [schoolData, setSchoolData] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: '2020-01-01'
  })

  const [practicalData, setPracticalData] = useState({
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    workingDate: '2020-01-01'
  })

  const buttonHandler = () => {
    if (htmlReady1 && htmlReady2 && htmlReady3) {
      setshowCV(!showCV)
    } else {
      setColor(true)
      setTimeout(() => setColor(false), 1500)
    }
  }

  return (
    <>
      <section>
        <div className="main-form">
          {!showCV ? (
            <div className="Form">
              <General
                htmlready={setHtmlready1}
                editable={htmlReady1}
                formData={generalData}
                setFormData={setGeneralData}
                className={color && !htmlReady1 ? `required-filling` : null}
              />
              <hr />
              <Educational
                htmlready={setHtmlready2}
                editable={htmlReady2}
                formData={schoolData}
                setFormData={setSchoolData}
                className={color && !htmlReady2 ? `required-filling` : null}
              />
              <hr />

              <Practcal
                htmlready={setHtmlready3}
                editable={htmlReady3}
                formData={practicalData}
                setFormData={setPracticalData}
                className={color && !htmlReady3 ? `required-filling` : null}
              />
            </div>
          ) : (
            <CV generalData={generalData} schoolData={schoolData} practicalData={practicalData} />
          )}

          <button className="form-button" onClick={buttonHandler}>
            {!showCV ? 'Generate CV' : 'Edit Forms'}
          </button>
        </div>
      </section>
    </>
  )
}

export default Form
