const arr =[10,20,30,40,50]
example1= ()=> {
let a = arr.map((value,index,arr)=>{
console.log(value,index,arr);
return value,index,arr                    
})
console.log(a)

}
//example1()
/////////////////////////////
example2= () =>{
let arr2 = [1,2,3,4,5];
let  a2 = arr2.filter((val)=> {

    return val > 2
    

});
console.log(a2);
}

//example2();
//////////////////////////////
example3 = ()=> {
let arr3 = [1,2,3,4,1]
const ex = arr3.reduce((r1,r2)=>{


return r1 * r2


})
console.log(ex)

}
example3();