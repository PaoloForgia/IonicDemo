import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public title: string;
  public items: string[];
  public input: string;
  public counter: number;

  constructor() {
    this.title = 'My title';
    this.items = ['Item 1', 'Item 2'];
    this.counter = 0;
  }

  sendData = (event: string) => {
    console.log(event);
  };

  increase = () => {
    this.counter++;
  };

  decrease = () => {
    this.counter--;
  };

  payMe = async () => {
    console.log('Payment received');
  };
}
