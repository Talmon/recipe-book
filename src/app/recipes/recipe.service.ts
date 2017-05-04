import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService  {
    private recipes : Recipe[] = [
    new Recipe(
    	'Schnitzel',
    	'Very Tasty',
    	'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKVyXsDPVTtT5J7vqPzAJU9wKtI5HomejMztltzUvfVpTdLxEbFA', 
    	[new Ingredient('French Fries',2),new Ingredient('Pork Meat',1)]
    	),
    new Recipe(
    	'Summer Salad',
    	'Okayish',
    	'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDN6WUSZCttTjYu9Ynk2pP7r2uWWpHCrl3t6atbN17A_4jxP39Ow',
    	[]
    	)
  ];
 
    getRecipes(){
    	return this.recipes;
    }
	getRecipe(id: number){
		return this.recipes[id];
	}
	deleteRecipe(recipe: Recipe){
		this.recipes.splice(this.recipes.indexOf(recipe), 1);
	}
}
