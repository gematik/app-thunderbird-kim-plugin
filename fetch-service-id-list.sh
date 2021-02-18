#!/bin/sh

curl -X GET https://fachportal.gematik.de/toolkit/dienstkennung-kim-kom-le 2>&1 \
   | grep 'application-block__content-title' \
   | sed -e "s/^\W*<span class=\"application-block__content-title\">\(.*\)<\/span>\W*$/\1/" \
   -e 's/^\(.*\)$/        <option value="\1">\1<\/option>/'
