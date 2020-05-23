import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  constructor(private router: Router) { }

  

  

  title = 'task1';
//this is calling simple function//
  callWhitePage(){
    console.log('this is call in white page');
    this.router.navigateByUrl('/white');
  }
//this is calling simple function//
callRedPage(){
  console.log('this is call in red page');
  this.router.navigateByUrl('/red');
}
callNavybluePage(){
  console.log('this is call in navyblue page');
  this.router.navigateByUrl('/navyblue');
}
callYellowPage(){
  console.log('this is call in yellow page');
  this.router.navigateByUrl('/yellow');
}
callGreenPage(){
console.log('this is call in green page');
this.router.navigateByUrl('/green');
}

}


//from any page if we click on a button it should take us t white screen//
//1-create a button in red color page and create a button in all pages.except white butto .
//2-after clicking any button in any page it should take me t white page. 
