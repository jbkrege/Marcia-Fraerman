#!/bin/bash

function change-context-and-upload {

  DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
  cd "${DIR}"
  echo "Changed working directory to $(pwd)"

  echo "Updating dependencies"
  npm i
  npm audit fix

  git add js/marcia.js
  git commit -m "automated commit - presumiably from an added painting"
  git push
  echo "Deploying to web server"
  firebase deploy
}

read -p "Did the website hosted by upload-checker look correct? (y/n): " correct
if [ "$correct" == "y" ]; then
  change-context-and-upload
else
  echo "Deleting changes and restoring old version."
  git checkout -- js/marcia.js
  echo "Complete. Feel free to close this window."
fi