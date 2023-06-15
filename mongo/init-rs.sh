#!/bin/bash

set -e
set -u
# set -x	# Uncoinimment for debugging

mongosh --quiet \
--host mongo \
-u $MONGO_ROOT_USER -p $MONGO_ROOT_PWD \
--authenticationDatabase admin \
<<-EOF
	rs.initiate();
EOF


exec "$@"
