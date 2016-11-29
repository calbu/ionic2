import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IQuestion } from '../models/question';

@Injectable()
export class QuestionService {
	private baseUrl = '/api/';
	private _productUrl = 'getquestions';
	isLoggedin: boolean = false;
	AuthToken;
	constructor(private _http: Http) { }

	getQuestions(questionType: string, numberOfQuestions: number): Observable<IQuestion[]> {
		var url = this.baseUrl + this._productUrl + '?categorie=' + questionType + '&no=' + numberOfQuestions;
		const headers = new Headers();
		this.loadUserCredentials();
		console.log(this.AuthToken);

		headers.append('Authorization', 'JWT ' + this.AuthToken);

		return this._http.get(url, { headers: headers })
			.map((response: Response) => <IQuestion[]>response.json())
			.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	loadUserCredentials() {
		var token = window.localStorage.getItem('currentUser');
		this.useCredentials(token);
	}
	useCredentials(token) {
		this.isLoggedin = true;
		this.AuthToken = token;
	}
}
