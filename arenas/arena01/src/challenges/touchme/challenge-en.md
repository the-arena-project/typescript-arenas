Create a file called touchme.sh that creates a file tree structure in the directory where it is executed so that the ls -R command displays the following result (we will not consider fields marked XX):

```shell
$>sh touchme.sh && ls -R
man super touchme.sh

./man:
better is

./man/better:
batman than

./man/better/batman:
$>
```
