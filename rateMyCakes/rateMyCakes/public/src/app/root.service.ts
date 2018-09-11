import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RootService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTaskByID();
  }

  getCakes(){

    return this._http.get('/api/cakes');

  }

  getCakeByID(cake_id){

    console.log("In service, cake id passed: ", cake_id)
    return this._http.get('/api/cakes/' + cake_id);

  }

  addNewCake(newCake) {
    console.log("In service, add cake: ", newCake);
    return this._http.post('/api/cakes', newCake);
  }

  addNewComment(newComment) {
    console.log("In service, add comment", newComment);
    return this._http.post('/api/comments', newComment);
  }

  editCake(cakeForComment, cake_id) {

    return this._http.patch('/api/cakes/'+ cake_id, cakeForComment);
  }

  // deleteCake(cake_id) {
  //   return this._http.delete('api/cakes/' + cake_id)
  // }

}


