#!/bin/bash

set -e
set -u
# set -x	# Uncomment for debugging

_config=\
'
{
	"_id": "rs0",
	"members": [
		{ "_id": 0, "host": "mongo" },
	]
}
'

sleep 5;


if [[ -n "${MONGO_INITDB_ROOT_USERNAME:-}" && -n "${MONGO_INITDB_ROOT_PASSWORD:-}" ]]; then
	mongosh --quiet \
	--host mongo \
	-u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD \
	--authenticationDatabase admin \
	<<-EOF
		rs.initiate($_config);
	EOF
else
	mongosh --quiet \
	--host mongo \
	<<-EOF
		rs.initiate($_config);
	EOF
fi

exec "$@"
