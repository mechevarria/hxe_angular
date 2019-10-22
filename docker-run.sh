#!/usr/bin/env bash
port=443

docker run \
  -p ${port}:${port} \
  localhost/hxe-angular
