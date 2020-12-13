// ********** ********** Resources ********** ********** \\
/*
  The following functions are the components needed to generate various Parcel-Delivering
  robots, who work in a simulated environment known as Meadowfield
*/

// Roads
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// Mail Route
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

// Build Graph
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    };
  };
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  };
  return graph;
};
const roadGraph = buildGraph(roads);

// Village State && random
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  };
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    };
  };
};
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

// 1) Random Robot:
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
};
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
};

// 2) Route Robot:
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  };
  return { direction: memory[0], memory: memory.slice(1) };
};

// 3) Goal-Oriented Robot:
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      };
    };
  };
};
function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    };
  };
  return { direction: route[0], memory: route.slice(1) };
};

// Function to run robot
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    };
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  };
};



// ********** ********** Exercise A: Measuring a Robot ********** ********** \\

/*
  Write a function compareRobots that takes two robots (and their starting memory).
  It should generate 100 tasks and let each of the robots solve each of these tasks.
  When done, it should output the average number of steps each robot took per task.

  For the sake of fairness, make sure you give each task to both robots, rather than
  generating different tasks per robot.
*/

function countSteps(state, robot, memory) {
  for(let steps = 0;; steps++) {
    if(state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  };
};

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0;
  let total2 = 0;

  for(let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  };
  console.log(`Robot 1 needed ${total1 / 100} steps per task`);
  console.log(`Robot 2 needed ${total2 / 100}`);
};

compareRobots(routeRobot, [], goalOrientedRobot, []);



// ********** ********** Exercise B: Robot Efficiency ********** ********** \\

/*
  Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
  If you observe that robot’s behavior, what obviously stupid things does it do?
  How could those be improved?

  If you solved the previous exercise, you might want to use your compareRobots function
  to verify whether you improved the robot.

  Hint:
  One possible solution would be to compute routes for all packages and then take the shortest one.
  Even better results can be obtained, if there are multiple shortest routes,
  by preferring the ones that go to pick up a package instead of delivering a package.
*/

function myRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Get a route for every parcel
    let routes = parcels.map(parcel => {
      if(parcel.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false
        };
      };
    });

    // You need to determine the precedence a route gets
    // Route length counts negatively
    // Routes that pick up a package gets a bonus
    function score({route, pickUp}) {
      return (pickUp ? 0.5 : 0) - route.length;
    };

    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  };
  return { direction: route[0], memory: route.slice(1) };
};

runRobot(VillageState.random(), myRobot, []);
compareRobots(goalOrientedRobot, [], myRobot, []);



// ********** ********** Exercise C: Persistent Group ********** ********** \\

/*
  Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values.
  Like Group, it has add, delete, and has methods.

  Its add method, however, should return a new PGroup instance with the given member added
  and leave the old one unchanged.
  
  Similarly, delete creates a new instance without a given member.
*/

class PGroup {
  constructor(members) {
    this.members = members;
  };

  add(value) {
    if(this.has(value)) return this;
    return new PGroup(this.members.concat([value]));
  };

  delete(value) {
    if(!this.has(value)) return this;
    return new PGroup(this.members.filter(m => m !== value));
  };
  
  has(value) {
    return this.members.includes(value);
  };
};

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
console.log(ab.has("a", "b"));