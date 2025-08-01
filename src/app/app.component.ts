import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vishal-portfolio';
  showPreloader: boolean = true;
  isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  ngOnInit(): void {
    if (this.isBrowser) {
      // Add preload class to HTML
      this.renderer.addClass(document.documentElement, 'ss-preload');

      // Wait for window to fully load
      window.addEventListener('load', () => {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'auto' });

        // Simulate fadeout delay
        setTimeout(() => {
          this.showPreloader = false;

          this.renderer.removeClass(document.documentElement, 'ss-preload');
          this.renderer.addClass(document.documentElement, 'ss-loaded');
        }, 800);
      });
    }
  }
}
