import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './comonents/register/register.component';
import {RouterModule, Routes} from "@angular/router";


const rotes: Routes = [
  {
    path: 'register', component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rotes)
  ]
})
export class AuthModule {
}
