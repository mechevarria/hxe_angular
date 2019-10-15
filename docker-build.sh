#!/usr/bin/env bash

docker build \
    -t localhost/hxe_angular . \
    --build-arg port=8080
