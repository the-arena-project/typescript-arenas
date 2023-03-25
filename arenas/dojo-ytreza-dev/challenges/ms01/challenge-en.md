# Welcome to the minesweeper challenge

TODO: review the whole text

## Description of the kata
We are going to play minesweeper. The idea of this kata is to propose an application that allows you to indicate the position of mines and calculate the number of mines adjacent to empty squares.

## To get started: 

### Starting track
We will make a function `minesweeper` which receives as input a string containing the field of mines (as a rectangle). It returns a string containing the resolved minefield.

For example, if you have as input : 
```
*...
....
.*..
....
```

you'll get the output: 
```
*100
2210
1*10
1110
```

Translated with www.DeepL.com/Translator (free version)