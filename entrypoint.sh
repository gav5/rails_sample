#!/bin/bash
set -e

# Remove potentially pre-existing server.pid for Rails
rm -f /myapp/tmp/pids/server.pid

# Exec container's main process
exec "$@"
