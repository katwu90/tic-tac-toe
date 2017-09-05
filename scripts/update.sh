# ID=5433 TOKEN="BAhJIiU2YzA4OWI0ODA4NGM0ODU1OTdjNWEzZjM2ZjU5ODc0NAY6BkVG--6a6d70bbb7358893599ee970533083cda53d39fa" INDEX="0" VALUE="x" OVER="false" sh scripts/update.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
