const recipes = [
  { recipe_name: 'Broccoli Pesto Pasta' },
  { recipe_name: 'Lemon Chicken' },
  { recipe_name: 'Salmon en Papillote' },
]

const ingredients = [
  { ing_name: 'Broccoli', ing_unit: 'lbs' },
  { ing_name: 'Pesto', ing_unit: 'lbs' },
  { ing_name: 'Pasta', ing_unit: 'lbs' },
  { ing_name: 'Lemon', ing_unit: 'slices' },
  { ing_name: 'Chicken', ing_unit: 'kilos' },
  { ing_name: 'Salmon', ing_unit: 'grams' },
]

const steps = [
  //Broccoli Pesto Pasta
  { step_text: 'Heat Pan', step_number: 1, recipe_id: 1 }, 
  { step_text: 'Add Broccoli', step_number: 2, recipe_id: 1 }, 
  { step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1 }, 
  //Lemon Chicken
  { step_text: 'Heat oven', step_number: 1, recipe_id: 2 }, 
  { step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2 }, 
  { step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2 }, 
  //Salmon en Papillote
  { step_text: 'Fish a salmon in the Bidasoa river', step_number: 1, recipe_id: 3 }, 
  { step_text: 'Cook salmon', step_number: 2, recipe_id: 3 }, 
]

const step_ingredients = [
  //Broccoli Pesto Pasta
  { step_id: 2 , ing_id: 1 , quantity: 1 }, //joins step id2 "add broccoli" with ing_id 1 as broccoli
  { step_id: 3 , ing_id: 2 , quantity: 1.5 }, 
  { step_id: 3 , ing_id: 3 , quantity: 2 }, 
  //Lemon chicken 
  { step_id: 5 , ing_id: 4 , quantity: 1 }, 
  { step_id: 5 , ing_id: 5 , quantity: 0.4 }, 
  //Salmon en Papillote
  { step_id: 7 , ing_id: 6 , quantity: 1 }, 
]

exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
};
