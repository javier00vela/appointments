
import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn : 'root'
})
export class AuthService {

    public static setSession(authResult : any) {
        const expiresAt = moment().add(authResult.data.expiresIn,'second');
        localStorage.setItem('id_token', authResult.data.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    public  logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public getExpiration() {
        const expiration:any = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
          
          