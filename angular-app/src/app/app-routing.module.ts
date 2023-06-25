import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter([
    { component: HomeComponent, path: 'home-component'} // will work on ChildComponent
  ], withComponentInputBinding())],
})
export class AppRoutingModule { }
