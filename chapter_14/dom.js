/*
  Given a set of mountains (an array of objects with name, height, and place properties),
  generate the DOM structure for a table that enumerates the objects.
  It should have one column per key, and a header row with <th> elements at the top,
  listing the column names.

  Write this so the columns are automatically derived from the objects, by taking the
  property names of the first object in the data.

  Add the resulting data to the element with an id attribute of "mountains" so that
  it becomes visible in the document.

  Once you have this working, right-align cells that contain number values by setting
  their style.textAlign property to "right".
*/

const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createTable(data) {
  let table = document.createElement("table");
  let fields = Object.keys(data[0]);
  let headRow = document.createElement("tr");
  fields.forEach(field => {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(field));
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);
  
  data.forEach(object => {
    let bodyRow = document.createElement("tr");
    let values = Object.values(object);
    values.forEach(value => {
      let bodyCell = document.createElement("td");
      bodyCell.appendChild(document.createTextNode(value));
      if(typeof value == "number") {
        bodyCell.style = "text-align:right;"
      };
      bodyRow.appendChild(bodyCell);
    });
    table.appendChild(bodyRow);
  });
  return table;
};

let mountain = document.querySelector("#mountains");
mountain.appendChild(createTable(MOUNTAINS));