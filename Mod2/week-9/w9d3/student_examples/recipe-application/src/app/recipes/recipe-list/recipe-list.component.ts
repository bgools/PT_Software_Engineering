import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [];

  trailRecipe: Recipe = {
    name: 'Tacos',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/440px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
    description: 'Taste soo good, make you wanns slap yo mamma!'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
