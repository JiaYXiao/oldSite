import { Component, OnInit, HostListener } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('changeState', [
     state('state1', style({
       height: '100px',
       backgroundColor: 'green'
     })),
     state('state2', style({
       height: '150px'
     })),
     transition('state1 => state2', [
       animate('1s')
     ]),
     transition('state2 => state1', [
       animate('0.5s')

     ]),
   ]),
  ]
})

export class HomeComponent implements OnInit {
  x;
  y;
  xB = 500;
  yB = 300;
  xS = 400;
  yS = 200;


  @HostListener('document:mousemove', ['$event']) onMouseMove(e) {
    this.x = e.clientX/innerWidth * 100 - 60;
    this.y = e.clientY/innerHeight * 100 - 75;
    this.xS = (e.clientX + innerWidth/4 )* 0.5 ;
    this.yS =(e.clientY + innerHeight/4 )* 0.5 ;
    this.xB = (e.clientX * 0.1) + innerWidth/4 ;
    this.yB =(e.clientY * 0.1) + innerHeight/4.5 ;
    if (this.x < 10) {
      this.x = 10;
    }
    if (this.y < 0) {
      this.y = 0;
    }

    console.log(this.x, this.y);
    console.log('     ', innerWidth);
  }


  constructor() {
   }

  ngOnInit() {
  }

}
