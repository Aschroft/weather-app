import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor() {}

  async getWeatherMetrics() {
    try {
      const response = await fetch(
        'https://community-open-weather-map.p.rapidapi.com/weather?q=Singapore,singapore&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              '18dad37058mshe3cb65b5ca8c067p1a2f97jsn7be82498c7d1',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        }
      );

      const weatherMetrics = await response.json();
      return weatherMetrics;
    } catch (error) {
      console.error(error);
    }
  }

  async getFiveDaysWeatherMetrics() {
    try {
      const response = await fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=Singapore%2CSingapore", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "18dad37058mshe3cb65b5ca8c067p1a2f97jsn7be82498c7d1",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })

      const weatherMetrics = await response.json();
      return weatherMetrics;
    } catch (error) {
      console.error(error);
    }
  }

  postWeatherRemarks(remarks: '') {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        remarks: remarks,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
