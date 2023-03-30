Create a shell script called linkedin.sh which should create a file tree in the directory where it is executed so that the ls command displays the following result (we will not consider the fields marked XX):

```shell
$> ls -l a b
a:
total 0
-r--------  1 XX  XX  0  XX aurel
-r--------  2 XX  XX  0  XX ilios
-r--------  1 XX  XX  0  XX kevin

b:
total 0
-r--------  2 XX  XX  0  XX hard-ilios
lXXXXXXXXX  1 XX  XX  7  XX soft-aurel -> a/aurel
```

Follow the arrow!
