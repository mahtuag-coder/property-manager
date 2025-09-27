import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenubarModule} from "primeng/menubar";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { PhoneMaskDirective } from './directives/phone-mask.directive';



@NgModule({
  declarations: [FormatPhonePipe, PhoneMaskDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    ToastModule,
    TableModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DropdownModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    ToastModule,
    TableModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    FormatPhonePipe,
    PhoneMaskDirective
  ]
})
export class SharedModule { }
