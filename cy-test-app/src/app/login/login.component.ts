import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { DbService } from '../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ DbService ]
})

export class LoginComponent implements OnInit {
	email;
	password;

	constructor(private DbService: DbService, private router: Router) { }

	onSubmit(){
		this.DbService.getUsers()
			.subscribe((res) => {
				for(var user in res){
					if((res[user].email.indexOf(this.email)>=0) && (res[user].password.indexOf(this.password))>=0) {
						this.router.navigateByUrl(`/users/${res[user]._id.$oid}`);
					}
				}
			});
	}
}
