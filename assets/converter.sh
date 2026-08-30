#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo "Greska: Nije uneta putanja" >&2
    exit 1
fi

path="$1"

if [ -d "$path" ]; then
    echo "Obradujem folder..."
else
    echo "Folder nije validan ili ne postoji."
    exit 1
fi

for file in "$path"/*.{JPG,jpg,JPEG,jpeg,png,PNG}; do
    [ -f "$file" ] || continue

    filename=$(basename "$file")
    name="${filename%.*}"

    echo "$file"

    magick "$file" \
        -auto-orient \
        -resize 1800x \
        -quality 80 \
        -strip \
        "$path/$name.webp"
done

echo "Gotovo!"
