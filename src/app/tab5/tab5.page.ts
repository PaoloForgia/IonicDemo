import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  public username: string;
  public password: string;

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController
  ) {
    this.baseUrl = 'https://webo.ssigno.ch/wbs/?type=login';
  }

  // https://webo.ssigno.ch/wbs/?type=login&username=gianni.rossi&password=gianni.rossi
  login = () => {
    const url = `${this.baseUrl}&username=${this.username}&password=${this.password}`;

    this.prepareData(url).subscribe((data) => {
      const jsonData: any = data;

      if (jsonData.login === '1') {
        this.loginSuccess();
      } else {
        this.loginFailed();
      }
    });
  };

  loginSuccess = () => {
    this.router.navigateByUrl('/home');
  };

  loginFailed = async () => {
    const alert = await this.alertController.create({
      header: 'Login failed',
      message: 'U suk',
      buttons: ['I agree'],
      translucent: true,
    });

    await alert.present();
  };

  prepareData(url: string) {
    return this.http.get(url);
  }
}
