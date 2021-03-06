import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl:'./shopping-list.component.html' ,
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bananas', 3),
    new Ingredient('Oster', 12),
    new Ingredient('Apples', 5),
    new Ingredient('Milk', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }

}
