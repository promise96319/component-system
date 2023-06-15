console.log('=========================2================');
console.log('=========================1=================');
console.log('=========================1=================');
console.log('=========================1=================');

// rs.initiate();

admin = db.getSiblingDB('admin');
admin.createUser({
  user: 'admin',
  pwd: '123',
  roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }],
});
