import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @Output() openSideNav = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  clickMenu():void{
    this.openSideNav.emit();
  }

}
