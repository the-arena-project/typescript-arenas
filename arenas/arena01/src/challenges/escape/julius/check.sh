#! /bin/sh

touch '?i'\''l"i*\o?s'\'

ls -1 .files > ref
ls -1 ../actual > actual

diff -u ref actual
