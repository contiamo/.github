#!/bin/bash

docker run --rm -it -w /app -v "$PWD":/app --network host node:14.16.1-alpine3.13 "$@"
