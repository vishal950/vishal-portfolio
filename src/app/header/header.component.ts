import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  isMobile = false;

  ngOnInit(): void {
    this.updateMobileState();
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.menuOpen = !this.menuOpen;
  }

  onNavClick(): void {
    if (this.isMobile) {
      this.menuOpen = false;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateMobileState();
  }

  private updateMobileState(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}