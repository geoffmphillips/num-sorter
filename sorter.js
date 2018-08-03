var list = [];

function addToList(num) {
  if (typeof num === "number") {
    list.push(num);
  }
  return list;
}

function sortList() {
  list.sort(function(a, b) {
    if (a === b) return 0;
    else if (a > b) return 1;
    else return -1;
  });
  return list;
}


module.exports = {
  sortList: sortList,
  addToList: addToList
};
