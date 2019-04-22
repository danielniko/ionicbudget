import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { LoadingService } from '../services/loading.service';
import { ModalController  } from '@ionic/angular';
import { ModalExpenseComponent } from '../component/modal-expense/modal-expense.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  //expenses$: Observable<any>;
  expenses: any;

  constructor( private backend: BackendService, private loading: LoadingService, private  modal: ModalController ) {

  }

  fetchExpenses() {
    this.loading.present("retrieving expenses...");

    this.backend.get('expense',{}).subscribe((data) => {
      if(data) {
        this.expenses = data;
        this.loading.dismiss();
      }
    });
  }

  ionViewWillEnter(){
    this.fetchExpenses();   
  }

  doDelete(expenseId) {
    this.loading.present("deleting expense...");
    this.backend.delete("expense/" + expenseId, expenseId)
      .subscribe(data => {
        if (data) {
          this.loading.dismiss();
          this.fetchExpenses();
        } 
      });
  }

  async doView(expenseId) {
    const modal = await this.modal.create({
      component: ModalExpenseComponent,
      componentProps: { expenseId: expenseId }
    });
    return await modal.present();
  }


  

}
