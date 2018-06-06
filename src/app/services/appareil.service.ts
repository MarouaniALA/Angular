import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppareilService {


    appareilsSubject = new Subject<any[]>();
   /* appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];*/
    private  appareilUrl = 'http://localhost:8000/appareils';
    private appareils : any [] = [];

    constructor(private httpClient : HttpClient)
    {
        this.getAppareils();

    }

    emitAppareilSubject() {

        this.appareilsSubject.next(this.appareils.slice());

    }
    switchOnAll() {

        for(let appareil of this.appareils) {

            appareil.status = 'allumé';
            this.emitAppareilSubject();

        }

    }

    getAppareils()
    {
        const ob1: Observable<any[]> = this.httpClient.get<any[]>(this.appareilUrl);
        ob1.subscribe((response) => {this.appareils=response;console.log(response);
        this.emitAppareilSubject();
        },

            (error) => console.log('erreur de chargement'));



    }

    switchOffAll() {

        for(let appareil of this.appareils) {

            appareil.status = 'éteint';
            this.emitAppareilSubject();

        }

    }
    switchOnOne(i: number) {

        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();

    }


    switchOffOne(i: number) {

        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();

    }
    getAppareilById(id: number) {

        const appareil = this.appareils.find(

            (s) => {

                return s.id === id;

            }

        );

        return appareil;

    }

    addAppareil(name: string, status: string) {

       const appareilObject = {

           name: '',

            status: ''

        };

        appareilObject.name = name;

        appareilObject.status = status;

       // appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

       // this.appareils.push(appareilObject);*/

        this.httpClient.post<any[]>(this.appareilUrl, appareilObject).subscribe(
            (val) => { console.log(val) ;this.getAppareils();},

            (error) => console.log('erreur de dajout' + error));


    }
    deleteAppareil(id) {

        this.httpClient.delete<any[]>(this.appareilUrl + "/" + id).subscribe(
            (val) => { console.log(val) ;this.getAppareils()},

            (error) => console.log('erreur de chargement'));

    }
    saveAppareil(id,appareilName,appareilStatus){
        const appareilObject = {
            id: '',
            name: '',

            status: ''

        };
        appareilObject.id = id;
        appareilObject.name = appareilName;

        appareilObject.status = appareilStatus;


        this.httpClient.put<any[]>(this.appareilUrl + "/" + id, appareilObject).subscribe(
            (val) => { console.log(val) ;this.getAppareils();},

            (error) => console.log('erreur de dajout' + error));

}
}
