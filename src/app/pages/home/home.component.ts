import { Component } from '@angular/core';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { LocationSectionComponent } from '../../components/location-section/location-section.component';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
@Component({
  selector: 'app-home',
  imports: [WhyChooseUsComponent, ContactSectionComponent,LocationSectionComponent , AboutUsSectionComponent, ServicesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
