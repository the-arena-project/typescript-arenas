# Introduction

This ultimate challenge consists of coding a simplified version of a database.

More specifically, it involves creating a program that allows persisting usernames on the disk and searching for them later.

These data will always be structured in the same way:

- A column called username that can contain a non-unique UTF-8 encoded string with no size limit.
- A column called id that uniquely identifies a record in the database.

# Operation

When starting the program, it should wait for instructions passed on the standard input and react accordingly.

A prefix miniSQL$ should indicate that the program is waiting for instructions, like when opening a shell.

Here's an example of starting the program:

```bash
$> npm run start
miniSQL$
```

The end of an instruction will always be marked by a \n.

Under **no circumstances** should the program exit with an error code 1.

It is therefore possible to pass numerous instructions to the program in a row.

Here's an example:

```bash
$> npm run start
miniSQL$ INSERT julius1
added: id=1, username=julius1
miniSQL$ INSERT julius2
added: id=2, username=julius2
```

The program must be able to read instructions from a file that serves as standard input via input redirection, for example:

```bash
$> cat instructions | npm run start
INSERT julius1
INSERT julius2
INSERT julius3
$> npm run start < instructions
miniSQL$ added: id=1, username=julius1
added: id=2, username=julius2
added: id=3, username=julius3
```

Or in the following way, via a pipe.

```bash
$> echo -e "INSERT julius1\nINSERT julius2\n" | npm run start
miniSQL$ added: id=1, username=julius1
added: id=2, username=julius2
```

The following three instructions must be handled:

- INSERT
- SELECT
- EXIT

In case of an unknown instruction, the program should return an error message as follows and display its usage:

```bash
$> npm run start
miniSQL$ something weird
illegal instruction: something weird
usage: INSERT username
       SELECT [username]
       EXIT [code]
miniSQL$
```

An empty instruction will not trigger an error message:

```bash
$> npm run start
miniSQL$
miniSQL$
miniSQL$
miniSQL$
miniSQL$
```

The INSERT command allows adding a username that will be stored on the disk.

The username can be composed of any utf-8 character.

A username is not necessarily unique. If multiple usernames are identical, they will necessarily have different ids.

The username will always be added with an id that is a positive integer, auto-incremented by the program itself.

Once the entry is added, a confirmation message is displayed to the user, as in the following example:

```bash
$> npm run start
miniSQL$ INSERT julius
added: id=1, username=julius
miniSQL$ INSERT julius
added: id=2, username=julius
miniSQL$ INSERT "wise julius"
added: id=3, username=wise julius
```

The SELECT command takes an optional username argument and returns all matching entries stored on the disk, displaying the number of available results, as in the following examples:

```bash
$> npm run start
miniSQL$ SELECT julius
found 2 entries:
-> id=1, username=julius
-> id=5, username=julius
```

```bash
$> npm run start
miniSQL$ SELECT doesNotExist
found 0 entries:
miniSQL$
```

If no argument is passed to SELECT, all entries must be returned.

```bash
$> npm run start
miniSQL$ SELECT
found 2 entries:
-> id=1, username=julius
-> id=2, username=julius2
miniSQL$
```

Another example in the case where the database would be empty:

```bash
$> npm run start
miniSQL$ SELECT
found 0 entries:
miniSQL$
```

The EXIT command allows you to exit the program with an exit code provided as an argument or 0 if not specified.

```bash
$> npm run start
miniSQL$ EXIT 1
$> npm run start
miniSQL$ EXIT
```

Of course, since this is a persisted database, all the data added is still accessible via a SELECT command after exiting and relaunching the program.

# Compiling the program

You may have noticed: this program does not run as usual.

For this program, you will need to submit a package.json file containing at least the following scripts:

`build`: this script must compile all your TypeScript files into a folder called dist at the root of your repository.
`start`: this script will start your compiled program in the dist folder.

Here is an example of using build and start:

```bash
$> npm run build
# your build command's output does not matter
$> npm run start
miniSQL$
```

To test your code, we will clone your submission folder, install all the allowed packages, and then inject your package.json to run a build and start your program with your start script.

# Constraints

We do not impose any performance constraints.

You can store all your data in a single file that will be read by your database for each SELECT.

You could also split your database into multiple files organized by name, size, or any other criteria of your choice.

You could create files responsible for indexing your data to significantly improve search performance by username.

Or even dive into implementing B-Trees.

At this point, it's up to you to judge what you are capable of accomplishing as well as the time and energy you want to allocate to this project.

You can use as many storage and/or indexing files as you want, as long as they are saved somewhere within your submission folder.

Your storage and/or indexing files can have the extension of your choice, although it's true that a .minisql extension would be really cool!
