import React from 'react'
import GenerateForm from './GenerateForm'

const CV = ({ generalData, schoolData, practicalData }) => {
  return (
    <>
      <h1> General data</h1>
      <hr />
      <GenerateForm obj={generalData} />
      <hr />

      <h1> Educational data</h1>
      <hr />
      <GenerateForm obj={schoolData} />

      <h1> Practical data</h1>
      <hr />
      <GenerateForm obj={practicalData} />
    </>
  )
}

export default CV
