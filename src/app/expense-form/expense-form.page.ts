import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { LoadingService } from '../services/loading.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.page.html',
  styleUrls: ['./expense-form.page.scss'],
})
export class ExpenseFormPage implements OnInit {

  selectedCategory: string;
  expenseForm: FormGroup;

  constructor(private router: Router, private backend: BackendService, private loading: LoadingService) {

    this.expenseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(),
      amount: new FormControl()
    });
  }

  ngOnInit() {

  }

  doSaveExpense() {
    console.log('save expense');
    let category = {
      categoryId: this.selectedCategory
    };
    let expense = {
      name: this.expenseForm.value.name,
      description: this.expenseForm.value.description,
      amount: this.expenseForm.value.amount,
      category: category
    }

    this.backend.post("expense", expense)
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.router.navigateByUrl("home");
        }
      });
  }

  selectCategoryHandler(categoryId: string) {
    this.selectedCategory = categoryId;
  }

}
