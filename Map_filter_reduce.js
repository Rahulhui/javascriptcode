

///array map method********************
let arr = [45,23,21]
let a = arr.map((value,index,array)=>{
//console.log(value,index,array)
return value + 1

})
//console.log(a)

///array filter method****************
let arr2=[45,23,21,0,3,5]
let a2 = arr2.filter((value)=>{
return value < 10 ;

})
//console.log(a2)

///Array reduce method*****************
let arr3 = [1,2,3,5,2,1]
let newarr3= arr3.reduce((value4,value3)=>{

return value3+value4

})
console.log(newarr3)