
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 200).notNullable().unique()
        })
        .createTable('ingredients', table => {
            table.increments('ing_id')
            table.string('ing_name', 200).notNullable().unique()
            table.string('ing_unit', 50)
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.string('step_text', 200).notNullable()
            table.integer('step_number').notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ing_id')
            table.float('quantity').notNullable()
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('ing_id')
                .unsigned()
                .notNullable()
                .references('ing_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
