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

You can use loops to run code multiple times.

## Object Oriented Programming

Java is an Object Oriented language. This means that every file must contain a class which contains all of the logic of the program.
Variables and methods can be created in this class.
We can also create `instances` of this class, which gives us access to these methods.

```java
public class Program {
  private String printMsg;
  public Program(String message) {
    this.printMsg = message;
  }
  public print() {
    System.out.println(this.printMsg);
  }
  public static void main(String[] args) {
    // creating an instance of the class
    Program program = new Program("Hello!");
    // call the print method
    program.print();
  }
}
```
