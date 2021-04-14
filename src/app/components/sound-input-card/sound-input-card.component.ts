import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-input-card',
  templateUrl: './sound-input-card.component.html',
})
export class SoundInputCardComponent implements OnInit {
  @Input() imgUrl: string = ''; 
  @Input() soundUrl: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
