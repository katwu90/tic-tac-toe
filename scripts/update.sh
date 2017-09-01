# ID=5197 TOKEN="BAhJIiU2YmJiNDI3YjAyZjczZjYxZGEyZjczNjBhZjg3MGM3ZAY6BkVG--fb9ae685df558804117b19de66a383bc5ad5731c" INDEX="0" VALUE="x" OVER="false" sh scripts/update.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN"\
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }'

echo
