#!/bin/bash

set -e

# Download fonts
function fetch {
  FILE="lib/fonts/$3"
  URL=$1
  HOST=$2

  if [ ! -f $FILE ]; then
    curl -H "Accept: */*" -H "Accept-Encoding: gzip, deflate, sdch" -H "Accept-Language: nb,en-GB;q=0.8,en;q=0.6,en-US;q=0.4,sv;q=0.2,da;q=0.2" -H "Cache-Control: no-cache" -H "Connection: keep-alive" -H "Host: $HOST" -H "Origin: http://localhost:8080" -H "Pragma: no-cache" -H "Referer: http://localhost:8080/node_modules/remark-bekk/build/bekk.css" -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36" $URL -o $FILE
  fi
}

fetch "https://fast.fonts.net/dv2/3/e924c59f-bc21-471f-ad1b-cefd0c1a6315.woff?d44f19a684109620e4841679a790e818c479e8f5785cb15d83ec5bea5d8f064ee83eb356d86a13a11a668d8d24d15d78e0b15390ac959d3e4632d71dcdab950bb71ec0abb045da7b397933ff647cc41952e2475af333751694341c3d79de9ab9915860f577e9d2dad7744847943d318a58ec575964b13537a159f6274cd8408e30c73f654470b0bdd7162c9cf5c8a7080374987fc47404a1e5a62c39ac68617c0b5cf396fc6a1ff5e9fc7c9e0922ac86508aadd4538a61350ec19a24cd315ee32d49d6cebfd463be&projectId=1927d443-3863-4afb-887a-5e2a888b69cb" "fast.fonts.net" "conduit-light.woff"
fetch "https://fast.fonts.net/dv2/3/e328f17d-e8e5-424f-92e8-31af32b2ebac.woff?d44f19a684109620e4841679a790e818c479e8f5785cb15d83ec5bea5d8f064ee83eb356d86a13a11a668d8d24d15d78e0b15390ac959d3e4632d71dcdab950bb71ec0abb045da7b397933ff647cc41952e2475af333751694341c3d79de9ab9915860f577e9d2dad7744847943d318a58ec575964b13537a159f6274cd8408e30c73f654470b0bdd7162c9cf5c8a7080374987fc47404a1e5a62c39ac68617c0b5cf396fc6a1ff5e9fc7c9e0922ac86508aadd4538a61350ec19a24cd315ee32d49d6cebfd463be&projectId=1927d443-3863-4afb-887a-5e2a888b69cb" "fast.fonts.net" "conduit-regular.woff"
fetch "https://fast.fonts.net/dv2/3/e93ee223-5d52-4bdf-a113-c6c4c8936824.woff?d44f19a684109620e4841679a790e818c479e8f5785cb15d83ec5bea5d8f064ee83eb356d86a13a11a668d8d24d15d78e0b15390ac959d3e4632d71dcdab950bb71ec0abb045da7b397933ff647cc41952e2475af333751694341c3d79de9ab9915860f577e9d2dad7744847943d318a58ec575964b13537a159f6274cd8408e30c73f654470b0bdd7162c9cf5c8a7080374987fc47404a1e5a62c39ac68617c0b5cf396fc6a1ff5e9fc7c9e0922ac86508aadd4538a61350ec19a24cd315ee32d49d6cebfd463be&projectId=1927d443-3863-4afb-887a-5e2a888b69cb" "fast.fonts.net" "conduit-medium.woff"
fetch "https://fast.fonts.net/dv2/3/fdaf48d4-c023-4a03-b948-53535ee4d571.woff?d44f19a684109620e4841679a790e818c479e8f5785cb15d83ec5bea5d8f064ee83eb356d86a13a11a668d8d24d15d78e0b15390ac959d3e4632d71dcdab950bb71ec0abb045da7b397933ff647cc41952e2475af333751694341c3d79de9ab9915860f577e9d2dad7744847943d318a58ec575964b13537a159f6274cd8408e30c73f654470b0bdd7162c9cf5c8a7080374987fc47404a1e5a62c39ac68617c0b5cf396fc6a1ff5e9fc7c9e0922ac86508aadd4538a61350ec19a24cd315ee32d49d6cebfd463be&projectId=1927d443-3863-4afb-887a-5e2a888b69cb" "fast.fonts.net" "conduit-bold.woff"

fetch "https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-016699-001583-000104-1389086264.woff" "s3-eu-west-1.amazonaws.com" "fedra-light.woff"
fetch "https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-016699-001583-000112-1389086270.woff" "s3-eu-west-1.amazonaws.com" "fedra-regular.woff"
fetch "https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-016699-001583-000105-1389086267.woff" "s3-eu-west-1.amazonaws.com" "fedra-regular-italic.woff"
fetch "https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-016699-001583-000116-1389086276.woff" "s3-eu-west-1.amazonaws.com" "fedra-bold.woff"
fetch "https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-016699-001583-000113-1389086273.woff" "s3-eu-west-1.amazonaws.com" "fedra-bold-italic.woff"


# Clean output folder
rm -rf dist
mkdir -p dist
./node_modules/.bin/lessc --no-ie-compat lib/bekk.less > dist/bekk.css