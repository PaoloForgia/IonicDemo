import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  public mail: string;
  public domanda: string;

  private baseUrl: string;
  private jsonData: any;

  constructor(
    private http: HttpClient,
    public alertController: AlertController
  ) {
    this.baseUrl = 'https://webo.ssigno.ch/wbs/?type=sendData';
    this.jsonData = [];
  }

  sendData = () => {
    const url = `${this.baseUrl}&mail=${this.mail}&domanda=${this.domanda}`;

    this.prepareData(url).subscribe((data) => {
      this.jsonData = data;
      this.showAlert();
    });
  };

  showAlert = async () => {
    const data = this.jsonData.risposta;

    const mailMessage = this.isNotEmpty(data.mail)
      ? `Email: ${data.mail} `
      : '';

    const domandaMessage = this.isNotEmpty(data.domanda)
      ? `domanda: ${data.domanda}`
      : '';

    const message =
      this.isEmpty(data.mail) && this.isEmpty(data.domanda)
        ? 'No data sent'
        : `${mailMessage}${domandaMessage}`;

    const alert = await this.alertController.create({
      header: 'Your sended data',
      message,
      buttons: ['Confirm'],
      translucent: true,
    });

    await alert.present();
  };

  prepareData(url: string) {
    return this.http.get(url);
  }

  isEmpty = (value: string | undefined) =>
    value === undefined || value === 'undefined' || value === '';

  isNotEmpty = (value: string | undefined) => !this.isEmpty(value);
}
