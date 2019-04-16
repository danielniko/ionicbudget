import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectCategoryComponent } from './select-category/select-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  declarations: [
    SelectCategoryComponent
  ],
  exports: [
    SelectCategoryComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
