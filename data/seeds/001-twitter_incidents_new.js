exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('twitter_incidents_new')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('twitter_incidents_new').insert([
        {
          id: 1,
          tweet_id: '1407096354850150000',
          date_created: '6/21/21 22:01',
          user_name: 'e102st',
          twitter_text:
            '@beyondthesyste1 @NYPDShea @NYPDChiefOfDept @NYPDChiefPatrol @NYPDDCPI @NYPDnews @NYPDFIRSTDEP @NYPDPersonnel @NYPDTransit @NYPDTransport @NYPDCommAffairs @NYPDHousing BLM only cares when a black life is killed by police. That‚Äôs the only time they unite it‚Äôs all about $$$$',
          force_rank: 'Rank 5 - Lethal Force',
          confidence: '99.99',
          tags: '{BLM, Violence}',
          city: null,
          state: null,
          twitterbot_tweet_id: null,
          responses: null,
        },
        {
          id: 2,
          tweet_id: '1407096349330370000',
          date_created: '6/21/21 22:01',
          user_name: 'e102st',
          twitter_text:
            '@beyondthesyste1 @NYPDShea @NYPDChiefOfDept @NYPDChiefPatrol @NYPDDCPI @NYPDnews @NYPDFIRSTDEP @NYPDPersonnel @NYPDTransit @NYPDTransport @NYPDCommAffairs @NYPDHousing BLM only cares when a black life is killed by police. That‚Äôs the only time they unite it‚Äôs all about $$$$',
          force_rank: 'Rank 5 - Lethal Force',
          confidence: '99.99',
          tags: '{BLM, Violence}',
          city: null,
          state: null,
          twitterbot_tweet_id: null,
          responses: null,
        },
        {
          id: 3,
          tweet_id: '1407096342543880000',
          date_created: '6/21/21 22:01',
          user_name: 'e102st',
          twitter_text:
            '@beyondthesyste1 @NYPDShea @NYPDChiefOfDept @NYPDChiefPatrol @NYPDDCPI @NYPDnews @NYPDFIRSTDEP @NYPDPersonnel @NYPDTransit @NYPDTransport @NYPDCommAffairs @NYPDHousing BLM only cares when a black life is killed by police. That‚Äôs the only time they unite it‚Äôs all about $$$$',
          force_rank: 'Rank 5 - Lethal Force',
          confidence: '99.99',
          tags: '{BLM, Violence}',
          city: null,
          state: null,
          twitterbot_tweet_id: null,
          responses: null,
        },
      ]);
    });
};
