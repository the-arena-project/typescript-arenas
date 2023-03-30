#! /bin/sh

set -e

sh ./scream.sh > ref
sh ../actual/scream.sh > actual

diff -u ref actual

rm ref actual
