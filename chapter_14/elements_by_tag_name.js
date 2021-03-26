/*
  Implement your own version of document.getElementsByTagName().
  Your method should take a node and a string (tag name) as arguments, and return
  an array containing all descendant element nodes with the given tag name.

  To find the tag name of an element, use it's "nodeName" property.
  Note that this will return the tag name in all uppercase, so use toLowerCase() or
  toUpperCase() to compensate.
*/


/* GIVEN
  <h1>Heading with a <span>span</span> element.</h1>
  <p>A paragraph with <span>one</span>, <span>two</span> spans.</p>
*/

/* EXPECTED
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
*/

  function byTagName(node, tagName) {
    let result = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
      for(let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if(child.nodeType == document.ELEMENT_NODE) {
          if(child.nodeName == tagName) result.push(child);
          explore(child);
        };
      };
    };
    explore(node);
    return result;
  };

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2