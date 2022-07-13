# Boolean Logic

Boolean logic is a form of logic where the only values that can be used are either `true` or `false`.

The 3 main words that are used within boolean algebra is "and", "or", and "not".
In boolean algebra, these words are often represented as symbols ("\*", "+", and "'" respectively).

## Logic Gates

Logic gates are different scenarios in which 2 inputs return a certain output.

| Abbreviation | Full Name        | Description                                                              |
| ------------ | ---------------- | ------------------------------------------------------------------------ |
| AND          |                  | Returns `true` only if both values are `true`                            |
| OR           |                  | Returns `true` if any of the values are `true`                           |
| XOR          | eXclusive OR     | Returns `true` only if one of the values are `true`                      |
| NAND         | Not AND          | Returns `true` only if both values are `false`                           |
| XNOR         | eXclusive Not OR | Returns `true` only if both values are `true` or both values are `false` |

## Truth Tables

A truth table is a table that gives a certain scenario with a given output.

Example:

| a   | b   | a XNOR b |
| --- | --- | -------- |
| T   | T   | T        |
| T   | F   | F        |
| F   | T   | F        |
| F   | F   | T        |
