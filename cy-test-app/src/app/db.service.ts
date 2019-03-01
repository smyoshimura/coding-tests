import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DbService {
	dbUrl = 'assets/db.json';

	constructor(private http: HttpClient) { }

	getUsers(){
		return this.http.get(this.dbUrl);
  	};
}
