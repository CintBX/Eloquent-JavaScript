/*
  The village crows own an old scalpel that they occasionally use on special missions-
  say, to cut through screen doors or packaging.  To be able to quickly track it down,
  every time the scalpel is moved to another nest, an entry is added to the storage of both
  the nest that had it, and the nest that took it, under the name "scalpel", with it's new
  location as the value.

  This means, that finding the scalpel is a matter of following the breadcrumb trail of
  storage entities, until you find a nest where that points at the nest itself.

  Write an async function 'locateScalpel' that does this, starting at the nest on which
  it runs.  You can use the anyStorage function defined earlier to access storage in
  arbitrary nests.  The scalpel has been going around long enough that you may assume
  that every nest has a "scalpel" entry in its data storage.

  Next, write the same function again without using async and await.

  Do request failures properly show up as rejections of the returned promise in
  both versions? How?
*/

// The following code depends upon other functions and objects defined within the textbook

function anyStorage(nest, source, name) {
  if (source == nest.name) return storage(nest, name);
  else return routeRequest(nest, source, "storage", name);
};

async function locateScalpel(nest) {
  let currentNest = nest.name;

  for(;;) {
    let nextNest = await anyStorage(nest, currentNest, "scalpel");
    if(nextNest == currentNest) return currentNest;
    currentNest = nextNest;
  };
};

function locateScalpel2(nest) {
  function loop(currentNest) {
    return anyStorage(nest, currentNest, "scalpel").then(next => {
      if(next == currentNest) return currentNest;
      else return loop(nextNest);
    });
  };
  return loop(nest.name);
};