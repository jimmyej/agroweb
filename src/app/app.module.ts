import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';

import { InvoiceListComponent } from './billing/invoices/invoice-list/invoice-list.component';
import { InquiryListComponent } from './billing/inquiries/inquiry-list/inquiry-list.component';
import { PaymentListComponent } from './billing/payments/payment-list/payment-list.component';

import { InvoiceService } from './billing/invoices/invoice.service';

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
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    MultiSelectModule,
    TooltipModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
