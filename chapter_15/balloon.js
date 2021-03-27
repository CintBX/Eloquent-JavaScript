/*
  Write a page that displays a balloon (using the balloon emoji, 🎈).
  When you press the up arrow, it should inflate (grow) 10 percent, and when you press
  the down arrow, it should deflate (shrink) 10 percent.

  You can control the size of text (emoji are text) by setting the font-size CSS property
  (style.fontSize) on its parent element. Remember to include a unit in the value—for
  example, pixels (10px).

  The key names of the arrow keys are "ArrowUp" and "ArrowDown".
  Make sure the keys change only the balloon, without scrolling the page.

  When that works, add a feature where, if you blow up the balloon past a certain size,
  it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and
  the event handler is removed (so that you can’t inflate or deflate the explosion).
*/

/* GIVEN
  <p>🎈</p>
*/

// My Solution (requires adding font-size style to <p></p>)
let balloon = document.querySelector("p");
let counter = 0;

window.addEventListener("keydown", e => {
  if(balloon.style.fontSize == "100px") {
    let explosion = document.createTextNode("💥");
    balloon.replaceChild(explosion, balloon.childNodes[0]);
    window.removeEventListener("keydown");
  };

  if(e.key == "ArrowUp") {
    counter += 2;
    balloon.style.fontSize = counter + "px";
    e.preventDefault();
  };

  if(e.key == "ArrowDown") {
    counter -= 2;
    balloon.style.fontSize = counter + "px";
    e.preventDefault();
  };
});

// Textbook Solution
let p = document.querySelector("p");
let size;

function setSize(newSize) {
  size = newSize;
  p.style.fontSize = size + "px";
}
setSize(20);

function handleArrow(event) {
  if (event.key == "ArrowUp") {
    if (size > 70) {
      p.textContent = "💥";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key == "ArrowDown") {
    setSize(size * 0.9);
    event.preventDefault();
  }
}
document.body.addEventListener("keydown", handleArrow);