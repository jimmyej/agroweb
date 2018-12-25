import { Component, OnInit } from '@angular/core';

import { Invoice } from '../../../billing/model/invoice';
import { InvoiceService } from '../invoice.service';

import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];
  datasource: Invoice[];
  totalRecords: number;
  cols: any[];
  selectedColumns: any[];
  loading: boolean;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {

    this.invoiceService.getInvoices().then(invoices => {
      this.datasource = invoices;
      this.totalRecords = this.datasource.length;
    });

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
    this.loading = true;
  }
  loadInvoicesLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.invoices = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
  }

}
