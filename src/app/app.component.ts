import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CitiesService]
})
export class AppComponent {
  title = 'uniandesTeam-front';
}
