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
  public cityName;

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<any> {
    return this.http.get(`${this.url}?q=Kharkiv&appid=${this.apiKey}`).pipe(
      tap((data) => {
        this.weatherList = data.list;
        this.cityName = data.city.name;
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
