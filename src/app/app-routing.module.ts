import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { ProjectComponent } from './project/project.component';
//import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'jobs', component: JobComponent },//localhost4200:/jobs
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectComponent },
  { path: '', component: HomeComponent }
  //{ path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [JobComponent, AboutComponent, ProjectComponent, HomeComponent];//, MainPageComponent]
