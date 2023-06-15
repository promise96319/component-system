console.log('=======333=======', process.env);
// 创建管理用户

admin = db
  .getSiblingDB('admin')
  .auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD,
  );
console.log('======2========');
admin.createUser({
  user: process.env.MONGO_ROOT_USER,
  pwd: process.env.MONGO_ROOT_PWD,
  roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }],
  passwordDigestor: 'server',
});

// 创建普通用户
console.log('======3========');

// admin = db.getSiblingDB(MONGO_DB);
// admin.createUser({
//   user: MONGO_USER,
//   pwd: MONGO_PWD,
//   roles: [{ role: 'userAdminAnyDatabase', db: MONGO_DB }],
//   passwordDigestor: 'server',
// });
