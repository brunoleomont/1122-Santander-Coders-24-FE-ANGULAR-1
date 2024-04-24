import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'first-component', component: MyFirstComponentComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  // { path: 'user/:name/:email/:country', component: UserComponent },
  { path: 'user/:name', component: UserComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
