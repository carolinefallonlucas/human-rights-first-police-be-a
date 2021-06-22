exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('potential_incidents', (potential_incidents) => {
      potential_incidents.increments('id');
      potential_incidents.text('city');
      potential_incidents.text('confidence');
      potential_incidents.date('date_created');
      potential_incidents.text('force_rank');
      potential_incidents.text('responses');
      potential_incidents.text('state');
      potential_incidents.text('tags');
      potential_incidents.text('tweet_id');
      potential_incidents.text('twitter_text');
      potential_incidents.text('twitterbot_tweet_id');
      potential_incidents.text('user_name');
    })
    .createTable('incidents_w_confidence', (incidents_w_confidence) => {
      incidents_w_confidence.integer('id').unique().primary().notNullable();
      incidents_w_confidence.text('case_id').unique().notNullable();
      incidents_w_confidence.text('city');
      incidents_w_confidence.float('confidence');
      incidents_w_confidence.date('dates');
      incidents_w_confidence.text('description');
      incidents_w_confidence.text('force_rank');
      incidents_w_confidence.float('lat');
      incidents_w_confidence.text('links');
      incidents_w_confidence.float('lon');
      incidents_w_confidence.text('state');
      incidents_w_confidence.text('tags');
      incidents_w_confidence.text('title');
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
