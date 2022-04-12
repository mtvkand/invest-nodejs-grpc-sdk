#!/usr/bin/env bash

npm_version=$(npm -v)

echo "Generating types from proto file started"

npm i

rm -rf ./src/generated/

mkdir ./src/generated/

chmod 755 ./src/generated

./node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=./src/generated --ts_proto_opt=outputServices=generic-definitions,useExactTypes=false -I ./protos/ ./protos/*.proto

if [ $? -eq 0 ]
then
  echo "Successfully generated types"
else
  echo "Could not generate types" >&2
fi

