
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: "John", last_name: "Smith", email: "john@testwmtdirectory.onmicrosoft.com" }
      ]);
    });
};
