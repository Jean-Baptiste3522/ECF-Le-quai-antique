import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Models/menu';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    console.log("MenuComponent - ngOnInit");
    this.menu = this.menuService.getMenus();
    console.log(this.menu);
  }
}
