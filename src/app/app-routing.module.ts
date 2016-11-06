import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UsersComponent }    from './auth/users/index';
import { AuthComponent }     from './auth/auth.component';
import { LoginComponent }    from './auth/login/index';
import { RegisterComponent } from './auth/register/index';
import { AuthGuard }         from './auth/_guards/index';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
