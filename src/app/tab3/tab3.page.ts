import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public jsonData: any;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://webo.ssigno.ch/wbs/?type=birre';
    this.jsonData = [];
  }

  ionViewWillEnter = () => {
    this.prepareDataRequest().subscribe((data) => {
      this.jsonData = data;
    });
  };

  getImgUrl = (img: string) => `https://webo.ssigno.ch/wbs/birre/${img}`;

  prepareDataRequest() {
    return this.http.get(this.url);
  }
}
