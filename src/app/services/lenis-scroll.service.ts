import { Injectable, OnDestroy } from '@angular/core';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root'
})
export class LenisScrollService implements OnDestroy {
  private lenis!: Lenis;
  private rafId!: number;
  constructor() { }

  init() {
    this.lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    } as any);

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };

    this.rafId = requestAnimationFrame(raf);
  }

  ngOnDestroy(): void {
    this.lenis?.destroy();
    cancelAnimationFrame(this.rafId);
  }
}
