import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-outline-card',
  templateUrl: './letter-outline-card.component.html',
  styleUrls: ['./letter-outline-card.component.less']
})
export class LetterOutlineCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() imgUrl: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
