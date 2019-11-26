#!/usr/bin/env bash

docker build \
  -f Dockerfile.dev \
  --build-arg HXE_HOST=${HXE_HOST} \
  --build-arg HXE_PORT=${HXE_PORT} \
  -t quay.io/mechevarria/hxe_angular .