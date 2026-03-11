import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {
  async type(
    setText: (value: string) => void,
    text: string,
    speed = 70
  ) {
    for (let i = 0; i <= text.length; i++) {
      setText(text.slice(0, i));
      await this.sleep(speed);
    }
  }

  async erase(
    getText: () => string,
    setText: (value: string) => void,
    speed = 50
  ) {
    while (getText().length > 0) {
      setText(getText().slice(0, -1));
      await this.sleep(speed);
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
