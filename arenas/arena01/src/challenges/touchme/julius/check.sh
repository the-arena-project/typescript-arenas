#! /bin/sh
set -e

mkdir touchme-ref touchme-actual

cd touchme-ref
sh ../touchme.sh
ls -R > ../ref
cd ..

cd touchme-actual
sh ../../actual/touchme.sh
ls -R > ../actual
cd ..

diff -u ref actual