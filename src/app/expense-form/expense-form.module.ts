import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpenseFormPage } from './expense-form.page';
import { ComponentsModule } from '../component/components.module';

const routes: Routes = [
  {
    path: '',
    component: ExpenseFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExpenseFormPage]
})
export class ExpenseFormPageModule {}
