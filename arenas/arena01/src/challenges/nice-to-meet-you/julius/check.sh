#! /bin/sh
set -e

cat ./NiceToMeetYou > tmp1
cat ../actual/NiceToMeetYou > tmp2

diff -u tmp1 tmp2 

rm tmp1 tmp2