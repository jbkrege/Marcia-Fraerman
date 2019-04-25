DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd "${DIR}"
echo "Changed working directory to $(pwd)"
git pull