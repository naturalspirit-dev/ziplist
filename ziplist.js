function zipList(list1, list2) {
  const newArray = [];
  for (let i = 0; i < list1.length; i++) {
    newArray.push(list1[i], list2[i]);
  }
  return newArray;
}

const testArray = ['a', 'b', 'c'];
const testArray2 = [1, 2, 3];
console.log(zipList(testArray, testArray2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testArray, testArray2));
