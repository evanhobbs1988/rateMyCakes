import { Component, OnInit } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _httpService: RootService){
    console.log("Loaded app component");
  }

  cakes = {};
  currentCake = {};
  showAllPressed = false;
  showCakePressed = false;
  newComment: any;
  newCake: any;
  cakeForComment: any;
  cake_avg = 0;
  // editedcake = null;
  // editingcake = false;
  

  ngOnInit(){
    this.getCakesFromService();
    this.currentCake = {};
    this.showAllPressed = false;
    this.showCakePressed = false;
    this.newComment = {content: "", rating: "", cake: {}};
    this.newCake = {imgURL: "", bakerName: "", comments: []};
  }
  getCakesFromService(){
    
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.showAllPressed = true;
      // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
      // This may be different for you, depending on how you set up your cake API.copy
      this.cakes = data["data"];
      // console.log("all cakes: ", this.cakes);
      
    });

  }
  show(cake_id) {
    // console.log("cake id: ",cake_id);
    let observable = this._httpService.getCakeByID(cake_id);
    observable.subscribe(data => {
      // console.log("Data in subscribe show: ", data)
      this.currentCake = data["data"][0];

      this.cake_avg = this.generateAvg(this.currentCake);
      console.log("Cake avg now: ", this.cake_avg);
    });
    this.showCakePressed = true;

    
  }

  generateAvg(cake) {

      console.log("in generate avg cake: ", cake);
      var rate_count = 0;
      for (var i = 0; i < cake.comments.length; i++) {
        rate_count += Number(cake.comments[i].rating);
      }
      var avg = rate_count/cake.comments.length;
      console.log("Avg at end of function: ", avg);
      return avg;
  }

  onSubmit() {
    // console.log("In submit");
    // console.log("New cake in on submit: ", this.newCake)
    let observable = this._httpService.addNewCake(this.newCake);
    observable.subscribe(data => {
      console.log("in observable: ", data);
    })
    this.newCake = {title: "", description: ""}
    this.getCakesFromService();
  }

  submitComment(cake) {
    console.log("submitted comment");
    console.log("New comment: ", this.newComment)
    let observable = this._httpService.addNewComment(this.newComment);
    observable.subscribe(data => {
      console.log("in observable comment: ", data);
    });

    this.cakeForComment = cake;
    this.cakeForComment.comments.push(this.newComment);
    console.log("In submitComment, pending edits: ", this.cakeForComment)
    let observableComment = this._httpService.editCake(this.cakeForComment, this.cakeForComment._id);
    observableComment.subscribe(data => {
      console.log("in observable comment for cake: ", data);
    })
    this.newComment = {content: "", rating: ""};
    // this.getCakesFromService();
  }
}