#!/bin/bash

sleep 5

# echo "------------ init rs -----------"

# mongosh \
# --host $MONGO_HOST \
# -u $MONGO_ROOT_USER -p $MONGO_ROOT_PWD \
# --authenticationDatabase admin \
# <<-EOF
#   rs.initiate();
# 	rs.status();
# EOF

echo "------------ init user -----------"

mongosh \
--host $MONGO_HOST \
-u $MONGO_ROOT_USER -p $MONGO_ROOT_PWD \
--authenticationDatabase admin \
<<-EOF
  use admin;
  db.createUser({
    user: "$MONGO_USER",
    pwd: "$MONGO_PWD",
    roles: [{ role: "readWrite", db: "$MONGO_DB" }],
    passwordDigestor: "server"
  });
  use $MONGO_DB;
	db.auth("$MONGO_USER", "$MONGO_PWD");
EOF
