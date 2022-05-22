import axios from 'axios'

const SESSION_BASE_URL = "http://localhost:8080"

class SessionService{

    getAllSessions(){
        return axios.get(SESSION_BASE_URL + "/sessions")
    }

    addSession(session){
        return axios.post(SESSION_BASE_URL + "/add", session);
    }

    getSessionById(sessionId){
        return axios.get(SESSION_BASE_URL + "/"+"sess"+"/" + sessionId);
    }

    updateSession(sessionId, session){
        return axios.put(SESSION_BASE_URL + "/"+"update"+"/"+ sessionId, session);
    }

    deleteSession(sessionId){
        return axios.delete(SESSION_BASE_URL + "/del/"+ sessionId);
    }
}

export default new SessionService()