function root1(root) {
  let one = 1;
  const nums = [1];
  for (let i = 0; i < root; i++) {
    one += 2;
    if (one < root) { 
    nums.push(one)
    }
  }
  console.log(nums)
}



//function root1(root) {
  //let count = 1;
  //for (let i = 0; i < root; i++) {
    //count += 2;
  //}
  //console.log(count);

  //for (let a = 0; a < root; a++) { 
    //if (diff != 0) { 
    //var diff = root - count;
      //}
    //console.log(a)
    //}
  //console.log(diff);
//}
 //function root(root) {
  //let count = 1;
  //for (let i = 0; i < root; i++) {
    //count += 2;
    //if (count <= root) {
      //console.log(count);
    //}
    //for (let a = 0; a < root; a++) {
      //  let diff = root - count;
       //if (diff === 0) {  
      //console.log(diff)
        //}
    //}
  //}

root1(9);


function test()  { 

let array = [1,2];

let array2 = 2; 
for (let i = 0; i < array.length; i++) { 
let sum = array2 - Number(array[i]);
  console.log(sum)
  }
}

test();