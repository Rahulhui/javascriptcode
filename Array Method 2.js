
console.log(1);
function deleteElementFromArray() {
    let d = [7, 8, 9, 10];
    delete d[1];
    console.log(d);
  }
  
  // Call the function
  deleteElementFromArray();
  //////////////////////////////
  console.log(2);
  function concatenateArrays() {
    let serial1 = [1, 2, 3, 4, 5, 6];
    let serial2 = [7, 8, , 9];
    let serial3 = [10, 11, 12, 13];
    let right = serial1.concat(serial2, serial3);
    console.log(right);
  }
  
  // Call the function
  concatenateArrays();
  ///////////////////////
  console.log(3);
  function sortNumericArray() {
    let ascending = [7, 8, 56, 6, 1, 2, 20, 5, 3];
    const newly = ascending.slice().sort((a, b) => a - b);
    console.log(newly);
  }
  
  // Call the function

////////////////////////
  console.log(4);
  const reverseArray = () => {
  let ascending = [7, 8, 56, 6, 1, 2, 20, 5, 3, 0];
  const reversely = ascending.slice().reverse();
  console.log(reversely);
};

// Call the function
reverseArray();
////////////////////////
console.log(5);

const spliceArray = () => {
    console.log(("start+add", "remove quantity", "which things you add, how many"));
    const new1 = [1, 2, 35, 56, 25];
    new1.splice(1, 2, 201, 202, 203, 204);
    console.log(new1);
  };
  
  // Call the function
  spliceArray();
  ///////////////////////
  console.log(6);
  const sliceArray = () => {
    const new2 = [1, 2, 35, 56, 25, 0, 12, 236, "m"];
    let naya = new2.slice(3, 5);
    console.log(naya);
  };
  
  // Call the function
  sliceArray();
  