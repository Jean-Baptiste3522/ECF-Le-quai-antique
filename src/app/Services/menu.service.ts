import { Injectable } from '@angular/core';
import { Menu } from '../Models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: Menu[] = [
    {
      titre: 'Menu du marché',
      formules: [
        {
          nom: 'Formule dîner (du lundi au samedi midi)',
          description: 'Entrée + plat + dessert',
          prix: 20
        },
        {
          nom: 'Formule déjeuner (du lundi au vendredi)',
          description: 'Entrée + plat ou plat + dessert',
          prix: 15
        }
      ]
    }
  ];
  constructor() { }

  getMenus(): Menu[] {
    return this.menu;
  }

  updateMenu(menuItem: { nom: string, prix: number }): void {
    this.menu.forEach((menu) => {
      menu.formules.forEach((formule) => {
        if (formule.nom === menuItem.nom) {
          formule.prix = menuItem.prix;
        }
      });
    });
  }
}
