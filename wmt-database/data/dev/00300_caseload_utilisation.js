
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('caseload_utilisation').del()
    .then(function () {
      // Inserts seed entries
      return knex('caseload_utilisation').insert([
        { user_id: 1, utilisation_percentage: 90, month_id: 1 },
        { user_id: 1, utilisation_percentage: 100, month_id: 2 },
        { user_id: 1, utilisation_percentage: 115, month_id: 3 },
        { user_id: 1, utilisation_percentage: 100, month_id: 4 },
        { user_id: 1, utilisation_percentage: 110, month_id: 5 },
        { user_id: 1, utilisation_percentage: 118, month_id: 6 },
        { user_id: 1, utilisation_percentage: 100, month_id: 7 },
        { user_id: 1, utilisation_percentage: 93, month_id: 8 },
        { user_id: 1, utilisation_percentage: 97, month_id: 9 },
        { user_id: 1, utilisation_percentage: 101, month_id: 10 },
        { user_id: 1, utilisation_percentage: 110, month_id: 11 },
        { user_id: 1, utilisation_percentage: 99, month_id: 12 },
        { user_id: 2, utilisation_percentage: 105, month_id: 1 },
        { user_id: 2, utilisation_percentage: 105, month_id: 2 },
        { user_id: 2, utilisation_percentage: 100, month_id: 3 },
        { user_id: 2, utilisation_percentage: 95, month_id: 4 },
        { user_id: 2, utilisation_percentage: 110, month_id: 5 },
        { user_id: 2, utilisation_percentage: 105, month_id: 6 },
        { user_id: 2, utilisation_percentage: 115, month_id: 7 },
        { user_id: 2, utilisation_percentage: 100, month_id: 8 },
        { user_id: 2, utilisation_percentage: 105, month_id: 9 },
        { user_id: 2, utilisation_percentage: 97, month_id: 10 },
        { user_id: 2, utilisation_percentage: 101, month_id: 11 },
        { user_id: 2, utilisation_percentage: 110, month_id: 12 }
      ]);
    });
};
