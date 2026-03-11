import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
// import { LenisScrollService } from './services/lenis-scroll.service';

@Component({
  selector: 'app-root',
  template: '<app-scroll-progress></app-scroll-progress><app-navbar></app-navbar><app-hero></app-hero><app-about></app-about><app-skills></app-skills><app-projects></app-projects><app-contact></app-contact><app-footer></app-footer>',
})
export class AppComponent {
  constructor(private themeService: ThemeService, 
    // private lenis: LenisScrollService
  ) {}

ngOnInit(): void {
  this.themeService.initTheme();
  // this.lenis.init();
}

}  