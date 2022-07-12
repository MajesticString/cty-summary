# Websites

The web is made up of 4 primary "languages."

- HTML (arguably not a language)
- CSS (arguably a language)
- JavaScript (not covered in this course) (definitely a language)
- Web Assembly (not covered in this course)

## HTML

HTML, or HyperText Markup Language, is what provides the content for websites. It uses an XML-like syntax.

Different tags provide different functionality or styles.

HTML tags are declared using arrow brackets (`<` and `>`) with the tag name going in between. The actual content of the tag goes between the opening and closing tags, with the closing tag being the opening tag with a slash after the opening brace.

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

## JavaScript

## Web Assembly

Web Assembly (WASM) allows languages other than JS to be used in the web
JavaScript, as well as other interpreted languages (such as python) are known for being quite slow, since they have to be
[Just In Time (JIT) compiled](./misc/README.md#interpreted-languages). This
compilation time decreases the speed of the language. WASM helps to fix this by allowing WASM to be a [compile target](./misc/README.md#compile-targets) for compiled languages, such as [Rust](https://rust-lang.org)
