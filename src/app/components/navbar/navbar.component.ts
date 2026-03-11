import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  constructor(private themeService: ThemeService) {}

ngOnInit():void {
  this.themeService.initTheme();
}

toggleTheme(): void {
  this.themeService.toggleTheme();
}

}
