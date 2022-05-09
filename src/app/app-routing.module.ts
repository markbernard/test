import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/view/http%3A%2F%2Fwww.google.com%2F', pathMatch: 'full' },
  { path: 'view/:url', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
