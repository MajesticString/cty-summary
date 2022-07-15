# Java

## Syntax

In a Java file, the program must start with a class declaration:

```java
public class Program {}
```

Inside of this class, we must have the main method, or the code that runs when the file is run.

```java
public class Program {
  public static void main(String[] args) {}
}
```

From there, we can call other methods, or just print stuff out:

:::tip
All statements must end in a semicolon (";").
:::

```java
public class Program {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

### Conditional Statements

Sometimes, you might only want to run something only if a condition is met.
We can accomplish this with `if` statements.
We can also use the `else` statement to run code if the condition is not met. These can also be chained.

```java
public class Program {
  public static void main(String[] args) {
    // variable
    boolean shouldRun = true;

    if (shouldRun) {
      System.out.println("running in an if statement");
    } else {
      System.out.println("shouldRun is false!")
    }
  }
}
```

### Loops

## Object Oriented Programming

Java is an Object Oriented language.
