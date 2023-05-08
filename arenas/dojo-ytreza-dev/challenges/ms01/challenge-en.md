# Welcome to the Minesweeper Challenge

The arena doors open. You enter the enclosure and look around. The crowd is present, all eyes are on you, and seated on his throne is Julius, who looks at you with an authoritative air.

> "Welcome, you are here to entertain me! What challenge shall I inflict upon you? There's no chance you'll escape, but I wonder how far you will go."

> Yes, I know! Let's prepare the Minesweeper Challenge!

## Kata Principle
You will participate in the Minesweeper Challenge. This exercise is inspired by the kata of the same name. The goal is to create a function that solves a minefield grid and indicates the number of mines surrounding each cell.

## Educational Objective
The objective is to create this function following the Test Driven Development (TDD) principles based on the Red Green Refactoring cycle.

Julius's role is to propose the tests you need to pass, which will guide you in the development process.

## To Start:
Throughout the challenges, you will have to implement the `minesweeper` function that takes a string containing the minefield (in rectangular form) as input. It returns a string containing the solved minefield.

For example, if you have as input:

```plain
*...
....
.*..
....
```

you will have as output:

```
*100
2210
1*10
1110
```

## Did you understand everything?

Julius wants to see that you have fully understood what he expects from you. To do this, you must provide proof of your understanding.

Here are three questions:

What result is expected when the minefield is empty (`""`)?

You must answer this by providing a variable that you export as `empty_field`.

What result is expected for the minefield: `"..*.."`? You will export it in a variable called `field_of_single_line`.

And finally, what result for the minefield: `"...*..\n..*...\n.**..."`?
You will export it in a variable called `complex_field`.

Once Julius is sure you have fully understood, you can truly begin the challenge.

Given the above instructions, Julius expects you to turn in something like this:

```ts
export const empty_field = '<YOUR_ABSOLUTELY_RIGHT_ANSWER>';

export const field_of_single_line = '<YOUR_UNDOUBTEDLY_SPECIAL_ANSWER>';

export const complex_field = '<YOUR_HIGHLY_OVERTHOUGHT_ANSWER>' 
```