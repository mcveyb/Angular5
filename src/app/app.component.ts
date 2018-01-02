import { Component } from '@angular/core';
import { RatingComponent } from './rating/rating.component';


@Component({
  selector: 'app-root',
  template: ` 
      <login></login>
      <user-form></user-form>   
      <product></product>
      <bs-jumbotron>
      <div class="heading">
      Hello World
      </div>
      <div class="body">
      rnwighthgpiwhbiwthbthbipuhbwtrbhuuhbuipwhttuwibhwihbtbtwugtgthgpiwrtbwtbtr
      birtubhrtpbhthbrtbhphbpwthbtwhhbtwprb
      </div>
      <div class="button">
      Learn More
      </div>
      </bs-jumbotron>
    `
})
export class AppComponent {
    title = "hello";

    onClick($event){
      console.log("Clicked",$event)
    }
}
