import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  baseExpList = [
    ['Software', 'Java', 'HTML/CSS/JS', 'C++'], 
    ['Hardware', 'Arduino', 'PBasic', 'VHDL', 'Raspberry Pi']
  ];

  extraExpList = [
    ['Frameworks', 'Angular', 'Springboot', 'React'],
    ['Various Programs', 'Jira', 'Confluence'],
    ['Testing/Mock Tools', 'Mockito', 'Jest']
  ];
  
  constructor() { }
  
  ngOnInit() {
  }

  
}
