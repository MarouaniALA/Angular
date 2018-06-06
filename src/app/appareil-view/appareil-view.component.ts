import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

    appareils: any[];
    isAuth = false;


    appareilSubscription: Subscription;
  constructor(private appareilService: AppareilService) { }

    onAllumer() {
        this.appareilService.switchOnAll();
    }
    onEteindre() {

        if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {

            this.appareilService.switchOffAll();

        } else {

            return null;

        }

    }

    ngOnInit() {
       // this.appareils = this.appareilService.appareils;
        this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(

            (appareils: any[]) => {

                this.appareils = appareils;

            }

        );

        this.appareilService.emitAppareilSubject();
    }

}
