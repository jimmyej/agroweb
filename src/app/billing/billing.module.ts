import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InquiryListComponent } from './inquiries/inquiry-list/inquiry-list.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InvoiceListComponent,
    InquiryListComponent,
    PaymentListComponent
  ]
})
export class BillingModule { }
