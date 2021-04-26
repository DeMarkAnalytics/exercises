#!/bin/bash
docker build -t candy-cassandra:v1 ./cassandra
docker run -d -p 9042:9042 candy-cassandra:v1