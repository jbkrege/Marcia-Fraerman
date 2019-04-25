#!/bin/bash

function change-context-and-upload {

  DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
  cd "${DIR}"
  echo "Changed working directory to $(pwd)"

  echo "Updating dependencies"
  npm i
  npm audit fix

  firebase serve

  read -p "Try the above url. Does this look correct? y/n" correct

  if [ "$correct" == "y"]; then
    echo "Uploading changes to marcia.js to git"
    git add js/marcia.js
    git commit -m "automated commit - presumiably from an added painting"
    git push
    echo "Deploying to web server"
    firebase deploy
  else
    echo "Deleting changes and restoring old version."
    git checkout *
  fi
}

change-context-and-upload
