# beautify-html 🎨

A simple customisable NPM package 📦 to instantly beautify boring HTML documents 🎨

# Install

Using [npm](http://npmjs.org):

```
npm i beautify-html
```

## Setting up

Import the package with ES6 modules:

```js
import beautify from "beautify-html";
```

Include the js file in the HTML document:

```html
<script type="module" src="yourfile.js"></script>
```

## Apply the styling

To apply the styling, call the beautify function with the type of theme you want and primary color.

**Syntax**

```js
beautify(theme, color, [, optIn?: boolean])
```

**Examples**

```js
import beautify from "beautify-html";

// light theme with blue primary color
beautify("light", "blue");

// dark theme with purple primary color
beautify("dark", "purple");
```

**Before**

![Screen Shot 2021-03-25 at 17 10 45](https://user-images.githubusercontent.com/42813496/112496037-18bee180-8d8d-11eb-90d6-a6c736f7d133.png)

**After**

![Screen Shot 2021-03-25 at 15 59 09](https://user-images.githubusercontent.com/42813496/112494429-b44f5280-8d8b-11eb-8032-ab9cfb75a694.png)
![Screen Shot 2021-03-25 at 15 58 58](https://user-images.githubusercontent.com/42813496/112494446-b7e2d980-8d8b-11eb-968c-986536eb39da.png)

## List of themes and colors

Themes:

1. light
2. dark

Colors:

1. blue
2. red
3. purple
4. green
5. orange

## Using classes

You can opt in into styling the document per element, similary of how you would use bootstrap for example.

Attributes included are:

- .beautify-text
- .beautify-title
- .beautify-input
- .beautify-button
- .beautify-link
- .beautify-hr
- .beautify-table
- .beautify-ul

**Examples**

```js
import beautify from "beautify-html";

// setting the opt in parameter to true will enable
// stying only to selected elements
beautify("light", "blue", true);
```

```html
<body>
  <h1 class="beautify-title">Lorem Ipsum</h1>
  ...
  <form method="get">
    ...
    <input class="beautify-input" type="text" />
    ...
    <input class="beautify-button" type="submit" />
    ...
  </form>
  ...
</body>
```

# License

MIT
