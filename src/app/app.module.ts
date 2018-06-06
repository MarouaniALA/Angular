import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserService} from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import { MaListAppareilComponent } from './ma-list-appareil/ma-list-appareil.component';

const appRoutes: Routes = [

    { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },

    { path: 'malistappareil', canActivate: [AuthGuardService], component: MaListAppareilComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'appareils/:id', component: SingleAppareilComponent },
    { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: '', component: AppareilViewComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }

];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    MaListAppareilComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule

  ],
  providers: [
      AppareilService,
      AuthService,
      AuthGuardService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
