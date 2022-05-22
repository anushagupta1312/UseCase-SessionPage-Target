import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SessionServices from '../services/SessionServices'

const ListSessions = () => {
  const [sessions, setsessions] = useState([])

  useEffect(() => {
    getAllSessions()
  }, [])

  const getAllSessions = () => {
    SessionServices.getAllSessions().then((response) => {
      setsessions(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }
  
  const deleteSession = (sessionId) => {
    // console.log(sessionId)

    SessionServices.deleteSession(sessionId).then((response) => {
      getAllSessions()
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='container'>
      <h2 className='text-center' style={{'marginTop' : '1rem'}}><b><u>SCHEDULE FOR UPCURVE</u></b></h2>
      <Link to='/add-session' className='btn btn-danger' style={{ 'marginTop': '1rem' }}>Add Session</Link>
      <table className='table table-dark table-hover table-bordered table-striped' style={{ 'marginTop': '1.5rem' }}>
        <thead className='table-danger' style={{ 'fontSize': '1.2rem' }}>
          <th>Session Id</th>
          <th>Topic Name</th>
          <th>Mentor Name</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Recording</th>
          <th>Actions</th>

        </thead>

        <tbody>
          {
            sessions.map(
              session =>
                <tr key={session.id}>
                  <td>{session.id}</td>
                  <td>{session.topicName}</td>
                  <td>{session.mentorName}</td>
                  <td>{session.date}</td>
                  <td>{session.duration}</td>
                  <td><a href={session.recording}>Recording</a></td>
                  <td>
                    <Link className="btn btn-danger" to={`/update-session/${session.id}`}>Update</Link>
                    <button className="btn btn-danger" onClick={() => deleteSession(session.id)} style={{ 'marginLeft': '1rem' }}>Delete</button>
                  </td>
                </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default ListSessions