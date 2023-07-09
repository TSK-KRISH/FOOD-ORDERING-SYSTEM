import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentSuccess: boolean = false;

  makePayment() {
    // Code to process payment goes here
    this.paymentSuccess = true;
  }

  closePopup() {
    this.paymentSuccess = false;
  }
}
