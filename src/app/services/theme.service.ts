import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

// toggleTheme(): void {
//   const root = document.documentElement;
//   const isDark = root.getAttribute('data-theme') === 'dark';

//   root.setAttribute('data-theme', isDark ? 'light' : 'dark');

//   localStorage.setItem('theme', isDark ? 'light' : 'dark');
// }

toggleTheme(): void {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');

  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
}


initTheme(): void {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const theme =
    savedTheme ??
    (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
}

}
