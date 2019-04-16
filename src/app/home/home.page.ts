import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //expenses$: Observable<any>;
  expenses: any;

  constructor(private backend: BackendService, private loading: LoadingService) {

  }

  ngOnInit() {
    this.loading.present("retrieving expenses...");

    this.backend.get('expense',{}).subscribe((data) => {
      if(data) {
        console.log('data retrieved');
        this.expenses = data;
        this.loading.dismiss();
      }
    });
  }

  ionViewWillEnter(){
    
  }
  

}
