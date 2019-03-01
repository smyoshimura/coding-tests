import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
	{ path : '', component : LoginComponent},
	{ path: 'login', component: LoginComponent },
  	{ path: 'users/:id', component: UsersComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
