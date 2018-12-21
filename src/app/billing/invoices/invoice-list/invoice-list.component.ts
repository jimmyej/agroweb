import { Component, OnInit } from '@angular/core';

import { Invoice } from '../../../billing/model/invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];
  cols: any[];
  selectedColumns: any[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.getInvoices().then(invoices => this.invoices = invoices);

    this.cols = [
      { field: 'accountNumber', header: 'Account Number' },
      { field: 'invoiceNumber', header: 'Invoice Number' },
      { field: 'invoiceDate', header: 'Invoice Date' },
      { field: 'invoiceAmount', header: 'Invoice Amount' },
      { field: 'currency', header: 'Currency' },
      { field: 'accountName', header: 'Account Name' },
      { field: 'accountAlias', header: 'Account Alias' },
      { field: 'billingState', header: 'Billing State' },
      { field: 'billingCity', header: 'Billing City' },
      { field: 'previousCharges', header: 'Previous Charges' },
      { field: 'corpGroup', header: 'Corp Group' },
      { field: 'paymentStatus', header: 'Payment Status' }
    ];

    this.selectedColumns = this.cols;
  }

}
