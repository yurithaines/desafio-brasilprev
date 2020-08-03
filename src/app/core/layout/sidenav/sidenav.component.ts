import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,OnChanges {

  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() isOpenSideNav: boolean = false;
  constructor() { }



  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
    if(this.sidenav){
      if(this.isOpenSideNav){
        this.sidenav.open();
      }else{
        this.sidenav.close();
      }
    }
  
  }


}
