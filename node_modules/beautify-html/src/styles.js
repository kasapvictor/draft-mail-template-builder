const colors = {
  blue: "#2b70c9",
  red: "#ea2b2b",
  purple: "#9069cd",
  green: "#58cc02",
  orange: "#ff9600",
};

const themes = {
  light: {
    background: "#fefefe",
    text: "black",
  },
  dark: {
    background: "#0d1118",
    text: "#8b949e",
  },
};

const bodyStylesheet = `
  :root {
    --primary: #2b70c9;
    --background: "#fefefe"
  }
  body {
    background-color: var(--background);
    color: var(--text);
    font-family: "Noto Sans JP", sans-serif;
    padding: 0 20px;
  }
`;

const tagsStylesheet = `
  p {
    font-size: 22px;
  }

  h1 {
    text-decoration: underline;
    text-decoration-color: var(--primary);
  }

  input {
    border: 2px solid var(--primary);
    box-shadow: -3px 3px 0 0 #000000;
    padding: 5px;
    margin: 8px 0 20px 0;
    display: block;
    background: var(--background);
    color: var(--text);
  }

  input:focus {
    outline: none;
  }

  button,
  input[type="submit"] {
    border: 2px solid var(--primary);
    box-shadow: -3px 3px 0 0 #000000;
    padding: 5px 25px;
    margin: 8px 0 20px 0;
    background: none;
    font-size: 22px;
  }

  button:hover,
  input[type="submit"]:hover {
    cursor: pointer;
    border-radius: 6px;
  }

  a {
    color: var(--primary);
    font-size: 22px;
  }

  hr {
    background: var(--primary);
  }

  th {
    color: var(--primary);
  }

  li {
    font-size: 22px;
  }

  li::marker {
    color: var(--primary);
  }
`;

const classesStylesheet = `
  .beautify-text {
    font-size: 22px;
  }

  .beautify-title {
    text-decoration: underline;
    text-decoration-color: var(--primary);
  }

  .beautify-input {
    border: 2px solid var(--primary);
    box-shadow: -3px 3px 0 0 #000000;
    padding: 5px;
    margin: 8px 0 20px 0;
    display: block;
    background: var(--background);
    color: var(--text);
  }

  .beautify-input:focus {
    outline: none;
  }

  .beautify-button {
    border: 2px solid var(--primary);
    box-shadow: -3px 3px 0 0 #000000;
    padding: 5px 25px;
    margin: 8px 0 20px 0;
    background: none;
    font-size: 22px;
  }

  .beautify-button:hover {
    cursor: pointer;
    border-radius: 6px;
  }

  .beautify-link {
    color: var(--primary);
    font-size: 22px;
  }

  .beautify-hr hr {
    background: var(--primary);
  }

  .beautify-table th {
    color: var(--primary);
  }

  .beautify-ul li {
    font-size: 22px;
  }

  .beautify-ul li::marker {
    color: var(--primary);
  }
`;

export { bodyStylesheet, tagsStylesheet, classesStylesheet, colors, themes };
