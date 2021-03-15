import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public remarksForm: FormGroup;
  public weatherMetrics;
  title = 'Weather';

  constructor(
    public weatherService: WeatherService,
    private fb: FormBuilder
  ) {
    this.remarksForm = this.fb.group({
      remarks: []
    });
  }
  
  async ngOnInit() {
    this.weatherMetrics = await this.weatherService.getWeatherMetrics();
  }

  onSubmit() {
    this.weatherService.postWeatherRemarks(this.remarksForm.value.remarks);
  }
}
