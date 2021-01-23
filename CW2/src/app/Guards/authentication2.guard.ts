import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class Authentication2Guard implements CanActivate {

    constructor(private authenticationServive: AuthenticationService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (!this.authenticationServive.isUserLogged()) {
            alert("У вас нет прав для перехода. Необходимо войти")
            return false;
        } 
        else if (!this.authenticationServive.isUserAdmin()) {
            alert("У вас нет прав для перехода. Необходимо иметь роль администратора")
            return false;
        } 
        else {
            return true;
        }
    }

}