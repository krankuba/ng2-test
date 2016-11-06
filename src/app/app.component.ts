import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'css/app.components.css']
})
export class AppComponent {
    title = 'Angular 2 SpaceShip'

    doMe() {
        if (localStorage.getItem('currentUser')) {
            return true; // logged in so return true
        }
    }

    logout() {
        localStorage.removeItem('currentUser'); // remove user from local storage to log user out
    }
}
