import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const LOGIN_URL = ' /users/login';


@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(API_URL + LOGIN_URL , { email: email, password: password })
            .pipe(map(user => {
                // Cuando pasa el login se guarda el  jwt token en local storage
                if (user && user.token) {
                    // mantener al usuario conectado entre las actualizaciones de la página
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
