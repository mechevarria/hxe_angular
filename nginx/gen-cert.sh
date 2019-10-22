#!/usr/bin/env bash

openssl req \
    -new \
    -newkey ec \
    -pkeyopt ec_paramgen_curve:prime256v1 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/C=US/ST=VA/L=Falls Church/O=SAPNS2/CN=localhost" \
    -keyout host.key \
    -out host.cert