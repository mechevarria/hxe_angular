#!/usr/bin/env bash
# HXE_HOST defaults to hxehost and HXE_PORT defaults to 51006
port=8080

docker run \
    -p ${port}:${port} \
    -e PORT=${port} \
    -e HXE_HOST=${HXE_HOST} \
    -e HXE_PORT=${HXE_PORT} \
    localhost/hxe_angular
