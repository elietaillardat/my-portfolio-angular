import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() id: number;
  @Input() experienceImg: string;
  @Input() experienceTitle: string;
  @Input() experienceDate: string;
  @Input() experienceDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
