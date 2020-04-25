import { Component, OnInit } from '@angular/core';
import { faUnity, faAngular, faJava, faAws, faGoogle, faReact } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  faUnity = faUnity;
  faAngular = faAngular;
  faJava = faJava;
  faAws = faAws;
  faGoogle = faGoogle;
  faReact = faReact;

  constructor() {
   }

  ngOnInit() {
    
  }

}
