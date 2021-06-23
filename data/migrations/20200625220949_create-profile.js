exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('twitter_incidents_new', (twitter_incidents) => {
      twitter_incidents.increments('id');
      twitter_incidents.text('city');
      twitter_incidents.text('confidence');
      twitter_incidents.date('date_created');
      twitter_incidents.text('force_rank');
      twitter_incidents.text('responses');
      twitter_incidents.text('state');
      twitter_incidents.text('tags');
      twitter_incidents.text('tweet_id');
      twitter_incidents.text('twitter_text');
      twitter_incidents.text('twitterbot_tweet_id');
      twitter_incidents.text('user_name');
    })
    .createTable('incidents_new', (incidents) => {
      incidents.integer('id').unique().primary().notNullable();
      incidents.text('case_id').unique().notNullable();
      incidents.text('city');
      incidents.float('confidence');
      incidents.date('dates');
      incidents.text('description');
      incidents.text('force_rank');
      incidents.float('lat');
      incidents.text('links');
      incidents.float('lon');
      incidents.text('state');
      incidents.text('tags');
      incidents.text('title');
    })
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('potential_incidents')
    .dropTableIfExists('incidents_w_confidence')
    .dropTableIfExists('profiles');
};
