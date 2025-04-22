let arr = [1, 2, 3, 4, 5, 6, 10, 8, 9];
const colors = ["red", "green", "blue"];
const map = arr.map((element) => element * 2);
const filter = arr.filter((element) => element !== 3);
const find = arr.find((element) => element > 8);
const reduce = arr.reduce((sum, element) => (sum += element));
const findindex = arr.findIndex((element) => element > 7);
colors.forEach((color,index) => {
    if(index===1){
        colors[1]='yellow'
    }
  console.log(index) 
});
console.log(colors)
 // Output: red, green, blue
// console.log(map);
// console.log(filter);
// console.log(find);
// console.log(reduce);
// console.log(findindex);
