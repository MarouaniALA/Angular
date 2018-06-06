import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ma-list-appareil',
  templateUrl: './ma-list-appareil.component.html',
  styleUrls: ['./ma-list-appareil.component.scss']
})
export class MaListAppareilComponent implements OnInit {
    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() index: number;
    @Input() id: number;
    private  appareilUrl = 'http://localhost:8001/exams';
    private appareils : any [] = [];

  constructor(private httpClient: HttpClient) {
 }

  ngOnInit() {
      this.httpClient.get<any[]>(this.appareilUrl).subscribe(
          (val) => {this.appareils = val ; console.log(val) },

          (error) => console.log('erreur de chargement'));
  }




}
