var db = connect('mongodb://localhost/admin');

db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: ['root'],
});
