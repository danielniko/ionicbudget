import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectCategoryComponent } from './select-category/select-category.component';
import { ModalExpenseComponent } from './modal-expense/modal-expense.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  declarations: [
    SelectCategoryComponent,
    ModalExpenseComponent
  ],
  exports: [
    SelectCategoryComponent,
    ModalExpenseComponent
  ],
  entryComponents: [ModalExpenseComponent],
})
export class ComponentsModule {}
