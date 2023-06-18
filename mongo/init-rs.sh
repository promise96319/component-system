#!/bin/bash

sleep 5

mongosh --quiet --host $MONGO_HOST \
<<-EOF
  rs.initiate();
	rs.status();
EOF

mongosh --quiet --host $MONGO_HOST \
<<-EOF
	use admin;
	db.createUser(
		{
			user: "$MONGO_ROOT_USER",
			pwd: "$MONGO_ROOT_PWD",
			roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
		});
	db.auth("$MONGO_ROOT_USER", "$MONGO_ROOT_PWD");
EOF
