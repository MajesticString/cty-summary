# Websites

The web is made up of 4 primary "languages."

- HTML (arguably not a language)
- CSS (arguably a language)
- JavaScript (not covered in this course) (definitely a language)
- Web Assembly (not covered in this course)

## HTML

HTML, or HyperText Markup Language, is what provides the content for websites. It uses an XML-like syntax.

Different tags provide different functionality or styles.

HTML tags are declared using [angle brackets](./misc/index.md#types-of-brackets) with the tag name going in between. The actual content of the tag goes between the opening and closing tags, with the closing tag being the opening tag with a slash after the opening brace.

An example HTML tag:

```html
<p>Hello!</p>
```

Tags can be nested like so:

```html
<p>This is a <a href="https://google.com">link</a></p>
```

### Basic File Structure

All html files should have all the HTML tags below

#### DOCTYPE (not technically covered, but should be known)

All HTML files should start with the `DOCTYPE` tag.
This tag specifies the version of HTML to be used.

Without this tag, the browser will enter "quirks mode" which changes the standard of HTML.

A `DOCTYPE` tag should be declared like so:

```html
<!DOCTYPE html>
```

#### html

This tag signifies the beginning and end of the document.
This tag should go after the `DOCTYPE` and should contain everything else.

```html
<!DOCTYPE html>
<html></html>
```

#### head

The `head` tag contains information that is not displayed on the actual page, but contains information about the page, such as (but not limited to) the title, description and styles.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The title of the page (displayed on the tab)</title>
    <meta
      name="description"
      content="Page description. Displayed in the search results under the title."
    />
    <!-- an external style -->
    <link rel="stylesheet" href="./style.css" />

    <!-- an embedded style -->
    <style></style>
  </head>
</html>
```

#### body

The body contains all visible content, such as images or text.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- intentionally omitted -->
  </head>
  <body>
    <h1>Large Text</h1>
    <h2>Slightly Smaller Large Text</h2>
    <p>Normal sized text</p>
    <img
      src="./image.png"
      alt="description of the image (for screen readers)"
    />
  </body>
</html>
```

## CSS

CSS stands for "Cascading Style Sheets" and is the language that is used to style HTML.

### HTML Attributes

CSS knows which HTML elements to style through the HTML's attributes and tag name.
Attributes are key-value pairs that come after the tag name, but before the closing [angle bracket](./misc/index.md#types-of-brackets).
The most commonly used attributes for styling are `class` and `id`.

#### The ID Attribute

The ID attribute gives an element a unique ID. ID's should be unique. IDs can also be target by links using the pound symbol (`#`).

Syntax:

```html
<h1 id="title">Why Pineapple Belongs on Pizza</h1>
```

Linking to an id can be done like so:

`https://example.com/#title`

#### The Class Attribute

The class attribute is a space-separated list of things that the element is (such as a button).

Syntax:

```html
<h1 class="big text-green">Why Cereal is a Soup</h1>
```

### CSS Syntax

Selectors go before [curly braces](./misc/index.md#types-of-brackets).
The curly braces contain key-value pairs of the styles to be applied.

Different selectors can be separated by commas. Spaces are used for nesting.
IDs are targeted with a pound symbol, classes are targeted with a period.

Example:

```html
<h1>Click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">This</a></h1>
<p id="truths">Pineapple belongs on pizza</p>
<p class="lies false">Bread sucks</p>
```

```css
/* target all `p` elements */
p {
  color: red;
}

/* only target `a`s inside of `h1`s */
h1 a {
  color: green;
}

/* target the `truths` id */
#truths {
  color: blue;
}

/* target the lies class and the false class */
.lies,
.false {
  /* the "olive" color looks like puke, btw */
  color: olive;
}
```

### Is CSS a Language?

A few years ago, basically no-one would have considered CSS a language.
However, with recent additions such as the `clamp` and `calc` functions, CSS is becoming more like an actual language.

For example, the `calc` function allows calculations of size to be done between different units with only CSS.

```css
body {
  width: calc(100% - 18px);
}
```

## JavaScript

JavaScript, or simply JS, is the language that allows basically all interactivity to be done.
Without JS, buttons wouldn't do anything, and you wouldn't be able to watch YouTube.

JS can be added to a website using the `script` tag. If a `source` attribute is specified, the script can be in a separate file.

```html
<body>
  <script>
    console.log('prints stuff the console');
  </script>
  <script src="./script.js"></script>
</body>
```

Since JS wasn't covered in this course and its syntax is so similar to [Java](./java.md), the syntax won't be covered.

## Web Assembly

Web Assembly (WASM) allows languages other than JS to be used in the web
JavaScript, as well as other interpreted languages (such as python) are known for being quite slow, since they have to be
[Just In Time (JIT) compiled](./misc/index.md#interpreted-languages). This
compilation time decreases the speed of the language.
WASM helps to fix this by allowing WASM to be a [compile target](./misc/index.md#compile-targets) for compiled languages, such as [Rust](https://rust-lang.org)
