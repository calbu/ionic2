import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
	baseUrl = '/api/';
	addUserUrl = 'adduser';
    authenticateUrl = 'authenticate';
    getinfoUrl = 'getinfo';
    isLoggedin: boolean;
    AuthToken;
    data = {
        success: '',
        msg: ''
    }

    constructor(public http: Http) {
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
    }

    storeUserCredentials(token) {
        window.localStorage.setItem('currentUser', token);
        this.useCredentials(token);

    }

    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    }

    loadUserCredentials() {
        var token = window.localStorage.getItem('currentUser');
        this.useCredentials(token);
    }

    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    }

    authenticate(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise(resolve => {
            this.http.post(this.baseUrl + this.authenticateUrl, JSON.stringify(user), { headers: headers }).subscribe(data => {
                if (data.json().success) {
                    this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    }
    adduser(user) {        
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise(resolve => {
            this.http.post(this.baseUrl + this.addUserUrl, JSON.stringify(user), { headers: headers }).subscribe(data => {
                if (data.json().success) {
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    }

    getinfo(): any {
        return new Promise(resolve => {
            var headers = new Headers();
            this.loadUserCredentials();
            //console.log(this.AuthToken);
            headers.append('Authorization', 'JWT ' + this.AuthToken);
            this.http.get(this.baseUrl + this.getinfoUrl, { headers: headers }).subscribe(data => {
                if (data.json().success){
                    console.log(data.json());
                    resolve(data.json());
                }
                else{
                    console.log(data.json());
                    resolve(false);
                }
            });
        })
    }

    logout() {
        this.destroyUserCredentials();
    }
}