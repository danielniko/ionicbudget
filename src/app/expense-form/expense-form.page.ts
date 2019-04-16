import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.page.html',
  styleUrls: ['./expense-form.page.scss'],
})
export class ExpenseFormPage implements OnInit {

  categories: any;
  selectedCategory: any;
  expense: any;

  constructor(private backend: BackendService, private loading: LoadingService) { 
    this.expense = {
      amount: 0,
      name: '',
      description:''
    }
  }

  ngOnInit() {
    
  }

  save() {
    console.log(this.expense);
  }

  selectCategoryHandler(categoryId : string) {  
    this.expense.categoryId = categoryId;                           
  }

}
