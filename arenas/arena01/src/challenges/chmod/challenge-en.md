Create a shell script called mode.sh that, when executed, changes the permissions of the files present in the directory where it runs so that the ls -l command displays the following result (we will not consider the fields marked with X):

```shell
$>ls -l
total XX
-rwxr-xr-x  1 XX  XX  X XX a
-rwxrwxrwx  1 XX  XX  X XX b
dr--------  2 XX  XX  X XX c
-r---w--w-  1 XX  XX  X XX d
-rwx-wx-wx  1 XX  XX  X XX e
$>
```


Note: your script should not create any files, and you should only submit the script. We guarantee that the necessary files will be in the current directory where your script will run during the evaluation.
