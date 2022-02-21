import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public jsonData: any;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://webo.ssigno.ch/wbs/?type=allUser';
    this.jsonData = [];
  }

  ionViewWillEnter = () => {
    this.prepareDataRequest().subscribe((data) => {
      this.jsonData = data;
    });
  };

  private prepareDataRequest(): Observable<object> {
    return this.http.get(this.url);
  }
}
