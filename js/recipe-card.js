/*eslint-env browser*/
/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

// var recipe = function (title, servings, ingredients) {
//     "use strict";
//     this.title = title;
//     this.servings = servings;
//     this.ingredients = ingredients;
//     this.printRecipe = function () {
//         window.console.log(this.title + "\n" + "Serves:" + this.servings + "\n" + "Ingredients:\n");
//         for (var i = 0; i < ingredients.length; i++) {
//             window.console.log("-" + this.ingredients[i]);
//         }
//     }
// }
// var ingridientsArrey = ["3 avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]
// 
// var favSalsa = new recipe ("Guacamole", 4, ingridientsArrey);
//favSalsa.printRecipe();