import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
    name: string = 'Appareil';

    status: string = 'Statut';
    trouve = false;

    constructor(private appareilService: AppareilService, private route: ActivatedRoute,private router: Router) { }


    ngOnInit() {

        const id = this.route.snapshot.params['id'];

        if(this.appareilService.getAppareilById(+id)==null)
        {
            //this.router.navigate(['not-found']);
            this.trouve = false;
        }
        else {
            this.name = this.appareilService.getAppareilById(+id).name;

            this.status = this.appareilService.getAppareilById(+id).status;
            this.trouve = true;
        }
    }
}
