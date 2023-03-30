#! /bin/sh
set -e

cp -r base ref-mode
cp -r base actual-mode

cd ./ref-mode
sh ../mode.sh
cd ..

cd ./actual-mode
sh ../../actual/mode.sh
cd ..

ls -l ./ref-mode > ref
ls -l ./actual-mode > actual

diff -u ref actual

# To allow playground removal
chmod -R 777 ./actual-mode
chmod -R 777 ./ref-mode
