// let arr = [1,2,3,4,5];
// //we can also write function max(arr: number[])
// function max(arr: Array<number>){
//   let max = arr[0];
//   for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
//   }
//   console.log(max);
// }
// max(arr)

interface user {
    firstName: string;
	lastName: string;
	age: number;
}
function filter(user: user[]){
    let legal = user.filter(t=>t.age>=18);
    for(let i = 0;i<legal.length;i++){
        console.log(legal[i]);
    }
}
filter([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ])