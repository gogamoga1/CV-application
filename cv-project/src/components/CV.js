import React from 'react'

const CV = ({ generalData, schoolData, practicalData }) => {
  return (
    <>
      <h1> General data</h1>
      <hr />
      {Object.entries(generalData).map(([key, value]) => {
        return (
          <h1 key={key}>
            {key}: {value}
          </h1>
        )
      })}
            <h1> Educational data data</h1>
            <hr />
      {Object.entries(schoolData).map(([key, value]) => {
        return (
          <h1 key={key}>
            {key}: {value}
          </h1>
        )
      })}
            <h1> Practical data</h1>
            <hr />
      {Object.entries(practicalData).map(([key, value]) => {
        return (
          <h1 key={key}>
            {key}: {value}
          </h1>
        )
      })}
    </>
  )
}

export default CV
