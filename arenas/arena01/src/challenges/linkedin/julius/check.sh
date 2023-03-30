#! /bin/sh
set -e

# test ref
mkdir linkedin
cd linkedin
sh ../linkedin.sh
cd ..
ls -1 linkedin/a linkedin/b > ref

# test actual
rm -rf linkedin
mkdir linkedin
cd linkedin
sh ../../actual/linkedin.sh
cd ..
ls -1 linkedin/a linkedin/b > actual

# make diff

diff -u ref actual