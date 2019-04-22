import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {

  categories: any;

  @Input() categoryId: string; 
  @Output() category = new EventEmitter<string>();  

  constructor(private backend: BackendService, private loading: LoadingService) { 

  }

  ngOnInit() {
    this.backend.get('category',{}).subscribe((data) => {
      if(data) {
        this.categories = data;
        if(!this.categoryId) {
          this.categoryId = data[0].categoryId;
        }
      }
    });
  }

  selectCategory() {
    this.category.emit(this.categoryId);     
  }

}
