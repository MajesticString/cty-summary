# Other Information

## Types of Brackets

Many different programming languages use different brackets for different things.
Since there are so many brackets, the names of the brackets can be quite confusing.

Here is a quick cheat sheet:

::: tip
The terms "bracket" and "brace" can be used interchangeably.

The names used are the most commonly used.
:::

| Bracket     | Name            |
| ----------- | --------------- |
| `<` and `>` | Angle brackets  |
| `[` and `]` | Square brackets |
| `(` and `)` | Parenthesis     |
| `\|`        | Pipe            |
| `{` and `}` | Curly braces    |

## Interpreted Languages

Interpreted languages are programming languages that are _directly interpreted_ and _not compiled_.

### JavaScript

JavaScript is an interpreted language since it is interpreted by the browser without being compiled

### Java

Java is both an interpreted and compiled language.
It is compiled into `class` files, which are then interpreted by the Java Virtual Machine.
This allows any Java program to be run on any computer with the Java runtime installed.

## Compile Targets

Compile targets are places or things that compiled languages (such as Rust) can be compiled to.
For example, if a compile target is Windows, a `.exe` file will be generated.
Whereas if a compile target was MacOS, a `.dmg` file will be generated.

## Markdown

Markdown is a markup language (see the pun?) that [compiles](#compile-targets) to HTML.

Instead of using tags, it uses characters around text to style it.

Example:

````md
# Equivalent of h1 Tag

## Equivalent of h2 Tag

<!-- ... -->

###### Equivalent of h6 tag

Equivalent of p tag

`code block`

```java
// large code block with syntax highlighting
```

_bold text_ (or _bold text_)

**italic text** (or **italic text**)

**_bold and italic text_** (or _**bold and italic text**_)

[links](https://google.com/)

Equivalent of `br` tag --> \
````

Output:

# Equivalent of h1 Tag

## Equivalent of h2 Tag

<!-- ... -->

###### Equivalent of h6 tag

Equivalent of p tag

`code block`

```java
// large code block with syntax highlighting
```

_bold text_ (or _bold text_)

**italic text** (or **italic text**)

**_bold and italic text_** (or _**bold and italic text**_)

[links](https://google.com/)

Equivalent of `br` tag --> \
