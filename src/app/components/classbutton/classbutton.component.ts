import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbutton',
  template: `
    <button class="d-flex btn justify-content-between"
    style="width: 100%;">  
        <div class="p-3">
            {{text}}
        </div>
        <div class="p-3">
            <img 
            src="../../../assets/arrow_forward_ios_black_24dp.svg"/>
        </div>
    </button>`,
})
export class ClassbuttonComponent implements OnInit {

  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
