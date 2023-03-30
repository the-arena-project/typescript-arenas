#! /bin/sh

set -e

mkdir ref-dir
mkdir actual-dir

cd ref-dir
sh ../throw.sh

cd ../actual-dir
sh ../../actual/throw.sh

cd ..
diff -u ref-dir/enemy actual-dir/enemy

rm -rf ref-dir actual-dir
