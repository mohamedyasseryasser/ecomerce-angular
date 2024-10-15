import { Component, OnInit } from '@angular/core';
import { GenerateserviceService } from './services/generateservice.service';
import { UserservicesService } from './services/userservices.service';
import { CarservicesService } from './services/carservices.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'LatestAppWithModule';
}
