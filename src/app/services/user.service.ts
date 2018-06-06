import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
    private users: User[] = [

        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])

    ];


    userSubject = new Subject<User[]>();


    emitUsers() {

        this.userSubject.next(this.users.slice());

    }


    addUser(user: User) {

        this.users.push(user);

        this.emitUsers();

    }
}
