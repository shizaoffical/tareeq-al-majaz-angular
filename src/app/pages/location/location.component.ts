import { Component } from '@angular/core';
import { LocationSectionComponent } from '../../components/location-section/location-section.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
@Component({
  selector: 'app-location',
  imports: [LocationSectionComponent,WhyChooseUsComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
