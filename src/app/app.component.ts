import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isOpenSideNav: boolean = false;
  title = 'desafio-brasil-prev';
  openSideNavEvent():void{
    this.isOpenSideNav = !this.isOpenSideNav;
  }
}
