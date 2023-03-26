# General documentation

To learn more about how all of this works, please [read the Official Documentation](https://docs.thearenaproject.co/).

## Getting started


We advise using node v16.x.x for this project.
First, install the required packages:

```
npm install
```

Then, create your arena in the `arenas` directory. 

Create challenges as well as your fights. It's time to unleash your creativity and sadism!

As for how to deal with this repository, most things are explained in the document linked above.

Exploring this repository should also give you some insights :)

## Convenience scripts

This boilerplate ships with some convenience scripts that help you interact with your track's content.

### Testing your whole Arena

You can test your arena by running the following command:

```shell
npm run test <your_arena_id>

## example
npm run test example-arena
```

### Testing a specific challenge using jest

You can automatically test a challenge from nowhere in the repository by running the following command:

```shell
# generic syntax
npm run test <your_arena_id> <challenge_id>

## example 
npm run test example-arena my-challenge2
```
