var sorter = require('./sorter');

var input = process.argv.slice(2);

function createList(numArray) {
  numArray.forEach(function(item) {
    sorter.addToList(Number(item));
  });
  return sorter.sortList();
}

var output = createList(input);

console.log(output);
