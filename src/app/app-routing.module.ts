import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChainingDialogComponent } from './chaining-dialog/chaining-dialog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'chaining',      component: ChainingDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
