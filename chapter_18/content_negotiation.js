/*
  One of the things HTTP can do is called content negotiation.
  The Accept request header is used to tell the server what type of document the client
  would like to get. Many servers ignore this header, but when a server knows of various
  ways to encode a resource, it can look at this header and send the one that the client
  prefers.

  The URL https://eloquentjavascript.net/author is configured to respond with either
  plaintext, HTML, or JSON, depending on what the client asks for.
  These formats are identified by the standardized media types text/plain,
  text/html, and application/json.

  Send requests to fetch all three formats of this resource.
  Use the headers property in the options object passed to fetch to set the header named
  Accept to the desired media type.

  Finally, try asking for the media type application/rainbows+unicorns
  and see which status code that produces.
*/

// 1) text/plain
fetch(
  "https://eloquentjavascript.net/author", 
  {headers: {"Content-Type": "text/plain"}}
).then(res => res.text()).then(console.log);
/* → → → returns:
  My name is Marijn Haverbeke.
  You can email me at marijn@haverbeke.nl, or visit my website,
  https://marijnhaverbeke.nl/ .
*/


// 2) text/html
fetch(
  "https://eloquentjavascript.net/author",
  {headers: {Accept: "text/html"}}
).then(res => res.text()).then(console.log);
/* → → → returns:
  <!doctype html>

  <div vocab="http://schema.org/" typeof="Person">
    <p><span property="name">Marijn Haverbeke</span>, <span
    property="jobTitle">Programmer</span></p>

    <p>You can reach me at <a href="mailto:marijn@haverbeke.nl"
    property="email">marijn@haverbeke.nl</a>, or visit my web page, <a
    href="https://marijnhaverbeke.nl/" property="url">marijnhaverbeke.nl</a>.</p>
  </div>
*/


// 3) application/json
fetch(
  "https://eloquentjavascript.net/author",
  {headers: {Accept: "application/json"}}
).then(res => res.text()).then(console.log);
/* → → → returns:
/*
  {
    "name": "Marijn Haverbeke",
    "email": "marijn@haverbeke.nl",
    "website": "https://marijnhaverbeke.nl/"
  }
*/


// 4) application/rainbows+unicorns
fetch(
  "https://eloquentjavascript.net/author",
  {headers: {Accept: "application/rainbows+unicorns"}}
).then(res => res.status).then(console.log);
// → → → returns: Status Code 406 (Not Acceptable)