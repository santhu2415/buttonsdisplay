import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navyblue',
  templateUrl: './navyblue.component.html',
  styleUrls: ['./navyblue.component.css']
})
export class NavyblueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  callafternavygatetowhitepage(){
    console.log('this should be taken me to white page');
    this.router.navigateByUrl('/white')
  }

}
