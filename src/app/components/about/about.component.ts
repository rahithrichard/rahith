import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   aboutme = resume.aboutme; 
  summary = this.aboutme.summary;
   tools = this.aboutme.tools;
   data = this.aboutme.experiences;
  constructor() {}
  ngOnInit(): void {}
}