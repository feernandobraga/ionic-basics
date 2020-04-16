import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private _activatedRoute: ActivatedRoute, 
              private _recipesService: RecipesService,
              private _router: Router,
              private _alertController: AlertController
              ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this._router.navigate(['/recipes'])
        return
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this._recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    console.log("Deleting")
    this._alertController.create({
      header: 'Are you sure?',
      message: "Do you really want to delete the recipe?",
      buttons: [{
          text: "Cancel", 
          role: "cancel"
        },
        {
          text: 'Delete',
          handler: () => {
            this._recipesService.deleteRecipe(this.loadedRecipe.id);
            this._router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertElement => {
      alertElement.present();
    });

  }

}
