import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcSagaComponent } from './dc-saga/dc-saga.component';
import { MarvelSagaComponent } from './marvel-saga/marvel-saga.component';

const routes: Routes = [
  {path: '', component: MarvelSagaComponent},
  {path: 'dc-saga', component: DcSagaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }