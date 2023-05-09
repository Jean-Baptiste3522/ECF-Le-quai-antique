import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Models/menu';
import { MenuService } from 'src/app/Services/menu.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menu: Menu[] = [];
  isAdmin: boolean = false;
  nom: string='';
  prix: number=0;

  constructor(private menuService: MenuService, private authService: AuthService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenus();
    this.isAdmin = this.authService.isAdmin();
  }

  updateMenu(nom: string, prix: number): void {
    if (this.authService.isAuthenticated()) {
      this.menuService.updateMenu({ nom, prix });
    }
  }
}
