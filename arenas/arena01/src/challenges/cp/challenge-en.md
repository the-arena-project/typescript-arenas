Write a `cp` program that copies a source file to a destination on the file system.

Your program will be invoked as follows:

```bash
$> node cp.js /path/to/src/file /path/to/dst/file
$>
```

If your program is called with the wrong number of arguments, it must exit and return an error code of 1.

If the path to the source or destination is invalid, your program must exit and return an error code of 1.

If the destination is a folder, the source file should be copied to a file with the same name in the destination folder.

Your program must be able to copy files of several tens of gigabytes if necessary. It's up to you to determine what this implies...

You can display whatever you want on the standard output or error.

The output of your program will not be tested.

Here are some examples of use cases for your program:

```bash
$> node cp.js do_not_exist.txt destination; echo $?
1

$> node cp.js || echo 'encountered some kind of error'
encountered some kind of error

$> node cp.js src.txt dst.txt
$> cmp src.txt dst.txt && echo 'copy was successful'
copy was successful

$> node cp.js src2.txt folder
$> cmp src2.txt folder/src2.txt && echo 'copy was successful'
copy was successful
```
