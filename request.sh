# categories

curl -X GET \
  -H 'Content-Type: application/json' \
  http://localhost:3001/api/categories \
  | jq

# product list

categoryid="defcf2ed-a579-427e-a211-5a25e7cb623e"
cursor=2

curl -X GET \
  -H 'Content-Type: application/json' \
  "http://localhost:3001/api/categories/$categoryid/products?cursor=$cursor" \
  | jq

# product detail

productid="44308bb7-2c76-4eff-81e0-23b02db259d2"

curl -X GET \
  -H 'Content-Type: application/json' \
  -H "Authorization: $token" \
  "http://localhost:3001/api/products/$productid" \
  | jq

