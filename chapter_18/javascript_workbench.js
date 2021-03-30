/*
  Create JS code that allows users to write javascript code inside of a <textarea>, and
  have the result of it displayed in another HTML tag
*/

/* GIVEN
  <textarea id="code">return "hi";</textarea>
  <button id="button">Run</button>
  <pre id="output"></pre>
*/

document.querySelector("button").addEventListener("click", () => {
  // the value of whatever is written in <textarea>
  let code = document.querySelector("#code").value;

  // the node that will contain the result
  let output = document.querySelector("#output");

  try {
    let result = Function(code)();
    output.innerText = String(result);
  } catch(e) {
    output.innerText = "Error!: " + e;
  }
});