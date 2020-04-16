import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from './recipes.service';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private _recipesService: RecipesService) {}

  ngOnInit() {
    //this.recipes = this._recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    console.log("will enter")
    this.recipes = this._recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log("did enter")
  }

  ionViewWillLeave() {
    console.log("will leave")
  }

  ionViewDidLeave() {
    console.log("did leave")
  }
}
