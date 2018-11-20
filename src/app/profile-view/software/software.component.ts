import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  @Input() id: number;
  @Input() color: string;
  @Input() softwareName: string;
  @Input() softwareLevel: string;
  @Input() softwareExamples: string;

  constructor() { }

  ngOnInit() {
  }

}
