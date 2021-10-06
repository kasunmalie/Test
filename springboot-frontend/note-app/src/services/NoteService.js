
import axios from 'axios';
//import http from "../http-common";


const NOTE_API_BASE_URL = "http://localhost:8080/api/notes"

class NoteService {
    
    getNotes(){
        return axios.get(NOTE_API_BASE_URL);
    }

   createNote(data){
       return axios.post(NOTE_API_BASE_URL,data);
   }
    
      /*getNoteById(nid) {
        //return http.get(`/api/note/${nid}`);
      }
    
      create(data) {
       // return http.post("/tutorials", data);
      }
    
      update(nid, data) {
       // return http.put(`/tutorials/${id}`, data);
      }
    
      delete(nid) {
       // return http.delete(`/tutorials/${id}`);
      }
    
      deleteAll() {
       // return http.delete(`/tutorials`);
      }

      findByTitle(title) {
       // return http.get(`/tutorials?title=${title}`);
      }*/
}

export default new  NoteService();