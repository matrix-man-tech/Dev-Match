#!/bin/bash

curl -X POST -i  http://localhost:3000/profiles \
 -H "Content-Type: application/json" \
 -d '{"name": "John Doe",
      "location": "New York",
      "age": 30}'

