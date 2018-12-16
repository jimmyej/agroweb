import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';

import { InvoiceListComponent } from './billing/invoices/invoice-list/invoice-list.component';
import { InquiryListComponent } from './billing/inquiries/inquiry-list/inquiry-list.component';
import { PaymentListComponent } from './billing/payments/payment-list/payment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    InvoiceListComponent,
    InquiryListComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
