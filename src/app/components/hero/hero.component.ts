import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';
import { TypewriterService } from '../../services/typewriter.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  data = resume.hero;
  text = '';
  constructor(private typewriter: TypewriterService) {}

   async ngOnInit() {
    await this.typewriter.type(
      (v) => (this.text = v),
      'Hello, welcome to my portfolio!'
    );

    await this.typewriter.sleep(1000);

    await this.typewriter.erase(
      () => this.text,
      (v) => (this.text = v)
    );

    await this.typewriter.sleep(300);

    await this.typewriter.type(
      (v) => (this.text = v),
      "Hi! I'm Rahithkumaran M V"
    );
  }
}