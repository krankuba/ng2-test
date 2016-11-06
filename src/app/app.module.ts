import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './auth/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
// end of fake backend

// system imports here
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
// end of system imports

// content
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AlertComponent }    from './auth/_directives/index';
import { AuthGuard }         from './auth/_guards/index';
import { UsersComponent }    from './auth/users/index';
import { LoginComponent }    from './auth/login/index';
import { RegisterComponent } from './auth/register/index';
import { AuthComponent }     from './auth/auth.component';
import { AlertService, AuthenticationService, UserService } from './auth/_services/index';
// end of content

// material 2
import {MdCoreModule}           from '@angular2-material/core';
import {MdCardModule}           from '@angular2-material/card';
import {MdButtonModule}         from '@angular2-material/button';
import {MdIconModule}           from '@angular2-material/icon';
import {MdIconRegistry}         from '@angular2-material/icon';
import {MdMenuModule}           from '@angular2-material/menu';
import {MdToolbarModule}        from '@angular2-material/toolbar';
import {MdCheckboxModule}       from '@angular2-material/checkbox';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
//

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        // for material
        MdCoreModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdCheckboxModule,
        MdProgressCircleModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AlertComponent,
        UsersComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        // for material
        MdIconRegistry,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
