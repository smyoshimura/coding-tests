import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../db.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ DbService ]
})

export class UsersComponent implements OnInit {
	private userList: Array<object> = [];
	userId;

	constructor(private DbService: DbService, private route: ActivatedRoute) { }

	getUserList(userId: string){
    	return this.DbService.getUsers()
    		.subscribe((res) => {
    			for(var user in res){
					if(res[user]._id.$oid==userId) {
						if(res[user].admin){
							this.userList = res;
						}
						else {
							this.userList.push(res[user]);
						}
					}
				}
    	});
	}

  ngOnInit() {
  	this.userId = this.route.snapshot.paramMap.get('id')
  	this.getUserList(this.userId);
  }
}
