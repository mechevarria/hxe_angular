#!/usr/bin/env bash

docker push quay.io/mechevarria/hxe_angular

cf push hxe_angular --docker-image quay.io/mechevarria/hxe_angular