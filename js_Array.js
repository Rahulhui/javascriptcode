class BookManager {
    constructor() {
      this.books = ["1", "2", "3", "4", "5", "6"];
    }
  
    displayBookCount() {
      console.log(this.books.length);
    }
  
    changeBookValues() {
      this.books[2] = "100";
      console.log(this.books);
    }
  }
  
  class NumberManager {
    constructor() {
      this.numbers = [1, 2, 3, 4];
    }
  
    modifyNumber() {
      this.numbers[2] = 100;
      console.log(this.numbers);
    }
  }
  // declare & run here Example Usage
  const bookManager = new BookManager(); //class
  bookManager.displayBookCount();
//   bookManager.changeBookValues();
  class TypeManager {
    constructor() {
      this.type = [1];
    }
  
    displayType() {
      console.log(typeof this.type[0]);
    }
  }

  const typeManager = new TypeManager();  //class
   typeManager.displayType();

  class ArrayMethodManager {
    constructor() {
      this.nums = [1, 7, 9];
      this.joinedArray = [7, 6, 9];
      this.arr = [1, 2, 3, "r"];
      this.puss = [4, 5, 6, 1, 2, 3];
     this. arrays = ["R",4,5]
    }
  
    toStringExample() {
      let str = this.nums.toString();
      console.log(str);
      console.log(typeof str);
    }
  
    joinExample() {
      let joinedString = this.joinedArray.join("-");
      console.log(joinedString);
    }
  
    popExample() {
      this.arr.pop();
      console.log(this.arr);
    }
  
    pushExample() {
      this.puss.push(0);
      console.log(this.puss);
    }
    shiftExample() {                ///remove the e;ement from the first
        let x = this.arrays.shift()
        console.log(x)
       console.log(this.arrays)
      


      }
unShiftexample(){                 //add to beggin to array 
let xx = this.arrays.unshift(78)
console.log(xx)
console.log(xx,this.arrays);


}



  } 
 const arrayMethodManager = new ArrayMethodManager();
//   arrayMethodManager.toStringExample();
//   arrayMethodManager.joinExample();
//   arrayMethodManager.popExample();
  //arrayMethodManager.pushExample();
//   arrayMethodManager.shiftExample();
  arrayMethodManager.unShiftexample();