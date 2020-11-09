import React from 'react'

const GenerateForm = ({obj}) => {
    return <> 
    {Object.entries(obj).map(([key, value]) => {
        return (
          <p key={key}>
            {key}: {value}
          </p>
        )
      })}
      </>
}

export default GenerateForm
