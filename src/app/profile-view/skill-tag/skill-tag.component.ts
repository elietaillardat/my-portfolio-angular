import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.scss']
})
export class SkillTagComponent implements OnInit {

  @Input() color: string;
  @Input() skillName: string;

  constructor() { }

  ngOnInit() {
  }

}
