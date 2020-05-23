import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';


@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

 aftercallthispage(){
   console.log('this should take me to white page ');
   this.router.navigateByUrl('/white')
 }

 aftertakewhitepage(){
   console.log('show that ul list in white page');
   this.router.navigateByUrl('/white')
 }//
}
