import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
    isAuth = false;
//    lastUpdate = new Date();
    lastUpdate = new Promise((resolve, reject) => {

        const date = new Date();

        setTimeout(

            () => {

                resolve(date);

            }, 2000

        );

    });

    constructor(private appareilService: AppareilService) {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }
    secondes: number;
    counterSubscription: Subscription;
    ngOnInit() {
        const counter = Observable.interval(1000);
        this.counterSubscription = counter.subscribe(

            (value) => {

                this.secondes = value;

            },

            (error) => {

                console.log('Uh-oh, an error occurred! : ' + error);

            },

            () => {

                console.log('Observable complete!');

            }

        );
    }

    ngOnDestroy() {

        this.counterSubscription.unsubscribe();

    }



}
