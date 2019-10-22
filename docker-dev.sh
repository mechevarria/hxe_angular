#!/usr/bin/env bash
port=443

docker run \
  -p ${port}:${port} \
  --mount type=bind,source=${PWD}/dist,target=/usr/share/nginx/html \
  localhost/hxe-angular
