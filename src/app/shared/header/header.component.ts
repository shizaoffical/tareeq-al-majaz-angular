import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // NOTE: styleUrls (plural)
})
export class HeaderComponent {
  isMenuOpen = false;
  openDropdownId: string | null = null; // 'services' | 'location' | null

  // Menu controls
  openMenu(): void { this.isMenuOpen = true; }
  closeMenu(): void { this.isMenuOpen = false; }
  toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }

  // Dropdown controls
  openDropdown(id: string): void { this.openDropdownId = id; }
  closeDropdown(): void { this.openDropdownId = null; }

  toggleDropdown(event: MouseEvent, id: string): void {
    event.preventDefault(); // prevent '#' jump
    // close all first if clicking a different one
    this.openDropdownId = (this.openDropdownId === id) ? null : id;
  }

  // Close dropdowns when clicking outside any dropdown
  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // If click is NOT inside a dropdown item, close all dropdowns
    if (!target.closest('.nav-item.dropdown')) {
      this.openDropdownId = null;
    }
  }
}
