#! /bin/sh

set -e 

cat ./Julius > ref
cat ../actual/Julius > actual

diff -u ref actual

rm ref actual
