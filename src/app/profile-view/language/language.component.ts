import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() id: number;
  @Input() icon: string;
  @Input() color: string;
  @Input() languageName: string;
  @Input() languageLevel: string;
  @Input() languageWRLevel: string;
  @Input() languageSLevel: string;
  @Input() languageDegree: string;
  @Input() languageExamples: string;

  constructor() { }

  ngOnInit() {
  }

}
