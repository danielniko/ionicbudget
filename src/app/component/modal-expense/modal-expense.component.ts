import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { LoadingService } from '../../services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-expense',
  templateUrl: './modal-expense.component.html',
  styleUrls: ['./modal-expense.component.scss'],
})
export class ModalExpenseComponent implements OnInit {

  @Input() expenseId: string; 
  expense$: Observable<any>;

  constructor( private backend: BackendService, private loading: LoadingService ) { }

  ngOnInit() {
    this.fetchExpenseById();
  }

  fetchExpenseById() {
    this.expense$ = this.backend.get('expense/' + this.expenseId, {});
  }


}
