import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style,
  animate, transition } from '@angular/animations';

@Component({
  selector: 'app-class-content',
  templateUrl: './class-content.component.html',
  styleUrls: ['./class-content.component.less'],
  animations: [
    trigger('openClose', [
      state('closed', style({ 
        height: 0,
        overflow: 'hidden'
      })),
      state('open', style({ 
        overflow: 'hidden',
        maxHeight: '50000px'
      })),
      transition('open => closed', animate('0.8s ease-in')),
      transition('closed => open', animate('0.8s ease-in')),
    ])
  ]
})
export class ClassContentComponent implements OnInit {

  @Input() text: string = '';
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
