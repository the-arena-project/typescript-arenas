#! /bin/sh

set -e

cat ./hello > ref
cat ../actual/hello > actual

diff -u ref actual

rm ref actual
