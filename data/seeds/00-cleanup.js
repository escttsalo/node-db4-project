const { clean } = require('knex-cleaner');

exports.seed = async knex => {
  await clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};