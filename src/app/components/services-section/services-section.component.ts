import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  isPaused: boolean = false;
  interval: any;

  ngAfterViewInit(): void {
    this.startSlider();
  }

  moveSlider(): void {
    if (this.isPaused) return;

    const services =
      this.slider.nativeElement.querySelectorAll<HTMLDivElement>('.service');
    const firstElement = services[0];
    this.slider.nativeElement.appendChild(firstElement);

    // Remove all active classes
    services.forEach((service) => service.classList.remove('active'));

    // Add active to middle element (currently second in NodeList)
    const middleIndex = Math.floor(services.length / 2);
    if (services[middleIndex]) {
      services[middleIndex].classList.add('active');
    }
  }

  startSlider(): void {
    this.interval = setInterval(() => this.moveSlider(), 1500);
  }

  stopSlider(): void {
    clearInterval(this.interval);
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.stopSlider();
    } else {
      this.startSlider();
    }
  }
}
