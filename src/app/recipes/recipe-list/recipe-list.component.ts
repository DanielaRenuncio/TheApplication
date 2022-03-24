import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl:'./recipe-list.component.html' ,
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Schrimps', 'Schrimps in fryier', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Fruit Salad', 'Really? A recipe for fruit salad? Yes, you need it. Because this simple dressing takes strawberries, raspberries, and mangoes to a whole new level. Sweet syrupy honey, fresh tart orange juice, and bright lemon zest come together to elevate your fruit (even if they are out of season) to new heights.', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fruit-salad-horizontal-jpg-1522181219.jpg?'),
    new Recipe('Grilled Oysters', 'Raw oysters not your thing? ', 'https://www.simplyrecipes.com/thmb/mXMjVIcda7bSta7gkol6nY5b8M8=/736x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__12__Jaden-Oysters-Grilled-c3754267407d4574a7a8887868a0f158.jpg'),
    new Recipe('Birthday Cake', 'This easy-to-prepare yellow cake recipe with buttercream frosting will be welcome at any birthday celebration. It is the perfect cake to eat with ice cream.', 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
