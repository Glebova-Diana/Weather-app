import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  protected readonly url = environment.weatherApiUrl;
  protected readonly apiKey = '82ec1a499983007dd0e53a561d615bde';
  private weather;

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<any> {
    console.log('url', `${this.url}?q=Kharkiv&appid=${this.apiKey}`);
    return this.http.get(`${this.url}?q=Kharkiv&appid=${this.apiKey}`).pipe(
      tap((data) => {
        this.weatherList = data.list;
      })
    ) as Observable<any>;
  }

  set weatherList(data) {
    this.weather = data;
  }

  get weatherList() {
    return this.weather;
  }
}
