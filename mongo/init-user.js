db.createUser({
  user: "comp",
  pwd: "comp",
  roles: [{ role: 'readWrite', db: "component" }],
  passwordDigestor: "server"
})
