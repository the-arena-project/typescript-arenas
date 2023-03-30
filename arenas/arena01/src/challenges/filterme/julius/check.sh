#! /bin/bash
set -e

args=(rob man RoB bla blo)

cd base

for arg in ${args[@]}
do
    set +e
    sh ../filterme.sh "$arg" > ../ref
    sh ../../actual/filterme.sh "$arg" > ../actual
    set -e

    diff -u ../ref ../actual
done