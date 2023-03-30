#! /bin/sh

mkdir a b
touch a/aurel a/ilios a/kevin
chmod 000 a/aurel a/ilios a/kevin
ln a/ilios b/hard-ilios
ln -s a/aurel b/soft-aurel
