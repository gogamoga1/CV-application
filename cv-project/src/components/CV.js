import React from 'react'

const CV = ({ generalData, schoolData, practicalData }) => {
  return (
    <>
      <h1>General information</h1>
      <hr />
      <div><strong>Name:</strong> {generalData.name}</div>
      <div><strong>E-mail:</strong> {generalData.email}</div>
      <div><strong>Telephone:</strong> {generalData.tel}</div>

      {/* <GenerateForm obj={generalData} /> */}
      <br />

      <h1>Educational experience</h1>
      <hr />
      <div><strong>School name:</strong> {schoolData.schoolName}</div>
      <div><strong>Title of study:</strong> {schoolData.studyTitle}</div>
      <div><strong>Date of study:</strong> {schoolData.studyDate}</div>
      <br />

      <h1>Practical experience</h1>
      <hr />
      <div><strong>Company name:</strong> {practicalData.companyName}</div>
      <div><strong>Position title:</strong> {practicalData.positionTitle}</div>
      <div><strong>Main tasks:</strong> {practicalData.mainTasks}</div>
      <div><strong>Date when worked for company:</strong> {practicalData.workingDate}</div>
    </>
  )
}

export default CV
