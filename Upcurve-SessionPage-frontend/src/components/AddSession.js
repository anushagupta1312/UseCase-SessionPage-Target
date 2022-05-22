import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SessionServices from '../services/SessionServices'

const AddSession = () => {
    const [topicName, settopicName] = useState('')
    const [mentorName, setmentorName] = useState('')
    const [date, setdate] = useState('')
    const [duration, setduration] = useState('')
    const [recording, setrecording] = useState('')
    const {id} = useParams();

    const navigate=useNavigate()
    const saveOrUpdateSession = (e) => {
        e.preventDefault()
        const added_session = { topicName, mentorName, date, duration, recording }
        if(id){
            SessionServices.updateSession(id,added_session).then((response) => {
                navigate('/sessions')
            }).catch(error => {
                console.log(error)
            })
        }else{
            SessionServices.addSession(added_session).then((response) => {
                console.log(response.data)
                navigate('/sessions')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        SessionServices.getSessionById(id).then((response) => {
            settopicName(response.data.topicName)
            setmentorName(response.data.mentorName)
            setduration(response.data.duration)
            setdate(response.data.date)
            setrecording(response.data.recording)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const title = () => {
        if(id){
            return <h2 className=' text-danger text-center fw-bolder' style={{ 'fontFamily': 'cursive' }}>Update Session</h2>
        }else{
            return <h2 className=' text-danger text-center fw-bolder' style={{ 'fontFamily': 'cursive' }}>Add Session</h2>
        }
    }
    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 border-dark mb-2'>
                        {
                            title()
                        }
                        
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'><b>Topic Name</b></label>
                                    <input
                                        type="text"
                                        placeholder='Enter the topic name'
                                        name='topicName'
                                        className='form-control border-dark'
                                        value={topicName}
                                        onChange={(e) => settopicName(e.target.value)}
                                    ></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'><b>Mentor Name</b></label>
                                    <input
                                        type="text"
                                        placeholder='Enter the mentor name'
                                        name='mentorName'
                                        className='form-control border-dark'
                                        value={mentorName}
                                        onChange={(e) => setmentorName(e.target.value)}
                                    ></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'><b>Date</b></label>
                                    <input
                                        type="text"
                                        placeholder='Enter the date'
                                        name='date'
                                        className='form-control border-dark'
                                        value={date}
                                        onChange={(e) => setdate(e.target.value)}
                                    ></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'><b>Duration</b></label>
                                    <input
                                        type="text"
                                        placeholder='Enter the duration'
                                        name='duration'
                                        className='form-control border-dark'
                                        value={duration}
                                        onChange={(e) => setduration(e.target.value)}
                                    ></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'><b>Recording</b></label>
                                    <input
                                        type="text"
                                        placeholder='Enter the recording link'
                                        name='recording'
                                        className='form-control border-dark'
                                        value={recording}
                                        onChange={(e) => setrecording(e.target.value)}
                                    ></input>
                                </div>
                                <button className='btn btn-dark' onClick={(e) => saveOrUpdateSession(e)}>Save Session</button>
                                <Link to='/sessions' className='btn btn-danger' style={{'marginLeft':'1rem'}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSession