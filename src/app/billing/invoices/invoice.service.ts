import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Invoice } from '../../billing/model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoices() {
    return this.http.get<any>('assets/data/invoices.json')
      .toPromise()
      .then(res => <Invoice[]>res.data)
      .then(data => {
        return data;
      });
    }
}
