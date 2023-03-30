#! /bin/sh
set -e

hash() {
    file="$1"
    node sha1.js "$file"
}

hash "./flag.txt" > ref
hash "../actual/flag.txt" > actual

diff -u ref actual