#! /bin/bash
set -e
trap 'echo "KO :("' EXIT

nodeCp() {
    node ../dist/cp.js ${@}
}

resetActual() {
    rm -rf ./actual && mkdir actual
}


# setup

cd ./test
mkdir assets

echo 'should copy an existing file to a file that does not exist (should create it)'
resetActual
echo 'Hello, world!' > ./assets/a.txt
nodeCp ./assets/a.txt ./actual/b.txt
diff -u ./assets/a.txt ./actual/b.txt
echo 'OK :)'

echo "should use src file's basename as name for the destination when destination is a directory"
resetActual
nodeCp ./assets/a.txt ./actual
diff -u ./assets/a.txt ./actual/a.txt
echo 'OK :)'

echo 'should exit with a non zero status code when src does not exist'
resetActual
set +e
if nodeCp ./assets/something_that_does_not_exist.txt ./actual/hey.txt; then
    exit 1
fi
set -e
echo 'OK :)'

echo 'should exit with a non zero status code when src is a directory (directory copy should not be handled)'
resetActual
set +e
if nodeCp ./assets ./actual/hey.txt; then
    exit 1
fi
set -e
echo 'OK :)'

# Testing with a very big file (> 2GB)
# V8 buffers are limited to 2GB as of now, which means that to pass this test it is not possible to load the whole copied file in memory.

echo "Testing with a HUGE file: let's see how smart your program can be :)"
resetActual
truncate -s3G assets/bigboy.txt
nodeCp assets/bigboy.txt ./actual/bigboy.txt
cmp assets/bigboy.txt ./actual/bigboy.txt
echo 'OK :)'