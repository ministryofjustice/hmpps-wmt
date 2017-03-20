
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('month_lookup').del()
    .then(function () {
      // Inserts seed entries
      return knex('month_lookup').insert([
        { id: 1, ordinal_value: 1, name: "January", year: 2016 },
        { id: 2, ordinal_value: 2, name: "February", year: 2016 },
        { id: 3, ordinal_value: 3, name: "March", year: 2016 },
        { id: 4, ordinal_value: 4, name: "April", year: 2016 },
        { id: 5, ordinal_value: 5, name: "May", year: 2016 },
        { id: 6, ordinal_value: 6, name: "June", year: 2016 },
        { id: 7, ordinal_value: 7, name: "July", year: 2016 },
        { id: 8, ordinal_value: 8, name: "August", year: 2016 },
        { id: 9, ordinal_value: 9, name: "September", year: 2016 },
        { id: 10, ordinal_value: 10, name: "October", year: 2016 },
        { id: 11, ordinal_value: 11, name: "November", year: 2016 },
        { id: 12, ordinal_value: 12, name: "December", year: 2016 }
      ]);
    });
};
