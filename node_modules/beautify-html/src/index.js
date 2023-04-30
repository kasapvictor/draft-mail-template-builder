import {
  bodyStylesheet,
  tagsStylesheet,
  classesStylesheet,
  colors,
  themes,
} from "./styles.js";

// create and return the google font link elements
function getGoogleFontElements() {
  let l1 = document.createElement("link");
  let l2 = document.createElement("link");
  l1.setAttribute("rel", "preconnect");
  l1.setAttribute("href", "https://fonts.gstatic.com");
  l2.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
  );
  l2.setAttribute("rel", "stylesheet");

  return [l1, l2];
}

function beautify(theme, color, optIn = false) {
  validateParameters(theme, color);
  // add the google font
  const [l1, l2] = getGoogleFontElements();
  document.head.appendChild(l1);
  document.head.appendChild(l2);
  // add the body styling
  const bodyStyle = document.createElement("style");
  bodyStyle.innerHTML = bodyStylesheet;
  document.body.appendChild(bodyStyle);
  // add the selected style
  const selectedStyle = document.createElement("style");
  selectedStyle.innerHTML = optIn ? classesStylesheet : tagsStylesheet;
  document.body.appendChild(selectedStyle);
  // set the primary color
  document.body.style.setProperty("--primary", colors[color]);
  // set the theme
  document.body.style.setProperty("--background", themes[theme].background);
  document.body.style.setProperty("--text", themes[theme].text);
}

function validateParameters(theme, color) {
  if (!themes[theme]) {
    throw new Error("Invalid theme choice. Theme can either be light or dark.");
  }

  if (!colors[color]) {
    throw new Error(`
      Invalid color choice. Colors avaliable are:
      1. blue
      2. red
      3. purple
      4. green
      5. orange
    `);
  }
}

export default beautify;
