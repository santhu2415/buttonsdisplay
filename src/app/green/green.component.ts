import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }
 
  callaftergreenpage(){
    console.log('this should me taken to whitepage');
    this.router.navigateByUrl('/white');
  }
}
