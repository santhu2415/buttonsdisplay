import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  callafterredpage(){
    console.log('this should take after white page');
    this.router.navigateByUrl('/white')
  }
}
