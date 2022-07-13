# Numbering Systems

There are different numbering systems.

Also, computers count from zero.

## Base 10

Humans use Base 10.
This means that another digit is pre-pended to the beginning of the number every 10 digits:

```py
1
2
3
4
5
6
7
8
9
# now another digit is added since it is the 11th digit
10
```

## Base 2

Computers use Base 2.
Base 2 is also known as binary.
Every digit is either a `0` or a `1` which means that binary can be written on punch cards.

Example:

```py
# "0b" tells the computer that the number is in binary
0b0
0b1
# another digit is added since it is the 3rd digit
0b10 # equivalent of 2
0b11
0b100
0b101
0b110
0b111
```

## Base 16

Base 16 is commonly called hexadecimal. It allows higher numbers to be put into a fewer amount of digits.

Computers commonly use base 16 when binary can be avoided.
The most common use case of hexadecimal is color codes.

`#FFFFFF` is white

`#000000` is black

When numbers pass 9, the letters `A-F` are used to keep only one digit used.

```py
# "0x" tells the computer that hexadecimal
0x0
0x1
0x2
0x3
0x4
0x5
0x6
0x7
0x8
0x9
# now letters are used
0xA
0xB
0xC
0xD
0xE
0xF
# now another digit is added
0x10
```
