#!/bin/bash

function change-context-and-serve {

  DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
  cd "${DIR}"
  echo "Changed working directory to $(pwd)"

  echo "Updating dependencies"
  npm i
  echo "Auditing security vulnerabilities"
  npm audit fix

  firebase serve
}

change-context-and-serve