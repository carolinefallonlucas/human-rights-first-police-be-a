exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('incidents_new')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('incidents_new').insert([
        {
          id: 1,
          case_id: 'ia-desmoines-2',
          dates: '2020-05-29 00:00:00',
          description:
            'Police throw multiple rounds of tear gas into crowd of protesters. According to the reporters, mace was also used on the crowd, although this was not caught on video. After the first round of tear gas is thrown, the crowd disperses, however the police continue to throw more canisters for at least 10-15 minutes longer. While there was some violence earlier in the evening, according to KCCI, the protesters were peaceful before the canisters were thrown.',
          links: [
            'https://www.kcci.com/article/developing-protesters-face-off-with-police-in-downtown-des-moines/32717301',
          ],
          city: 'Des Moines',
          state: 'Iowa',
          lat: 41.5865739,
          lon: -93.6164429,
          title:
            'Police repeatedly shoot tear gas into crowd, even after crowd has dispersed',
          tags: [
            'gas',
            'mace',
            'protester',
            'tear gas',
            'tear gas canister',
            'throw',
          ],
          force_rank: 'Rank 4 - Chemical & Electric',
          confidence: 15,
        },
        {
          id: 2,
          case_id: 'ca-sanjose-9',
          dates: '2020-05-29 00:00:00',
          description:
            'Police throw multiple rounds of tear gas into crowd of protesters. According to the reporters, mace was also used on the crowd, although this was not caught on video. After the first round of tear gas is thrown, the crowd disperses, however the police continue to throw more canisters for at least 10-15 minutes longer. While there was some violence earlier in the evening, according to KCCI, the protesters were peaceful before the canisters were thrown.',
          links: [
            'https://www.kcci.com/article/developing-protesters-face-off-with-police-in-downtown-des-moines/32717301',
          ],
          city: 'Des Moines',
          state: 'Iowa',
          lat: 41.5865739,
          lon: -93.6164429,
          title:
            'Police repeatedly shoot tear gas into crowd, even after crowd has dispersed',
          tags: [
            'gas',
            'mace',
            'protester',
            'tear gas',
            'tear gas canister',
            'throw',
          ],
          force_rank: 'Rank 4 - Chemical & Electric',
          confidence: 15,
        },
        {
          id: 3,
          case_id: 'ca-sanjose-8',
          dates: '2020-05-29 00:00:00',
          description:
            'Police throw multiple rounds of tear gas into crowd of protesters. According to the reporters, mace was also used on the crowd, although this was not caught on video. After the first round of tear gas is thrown, the crowd disperses, however the police continue to throw more canisters for at least 10-15 minutes longer. While there was some violence earlier in the evening, according to KCCI, the protesters were peaceful before the canisters were thrown.',
          links: [
            'https://www.kcci.com/article/developing-protesters-face-off-with-police-in-downtown-des-moines/32717301',
          ],
          city: 'Des Moines',
          state: 'Iowa',
          lat: 41.5865739,
          lon: -93.6164429,
          title:
            'Police repeatedly shoot tear gas into crowd, even after crowd has dispersed',
          tags: [
            'gas',
            'mace',
            'protester',
            'tear gas',
            'tear gas canister',
            'throw',
          ],
          force_rank: 'Rank 4 - Chemical & Electric',
          confidence: 15,
        },
      ]);
    });
};
