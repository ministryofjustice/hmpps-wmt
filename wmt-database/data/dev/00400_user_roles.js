
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_roles').insert([
        {user_id: 1, role: 'admin'}
      ]);
    });
};
