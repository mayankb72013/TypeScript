// there are two ways we can declare a custom type
// #1 by using the 'type' keyword
// #2 by using the 'interface' keyword

// method 1
// type userType = {
//    firstName: string,
//    lastName: string,
//    age: number
// }
interface userType {
   firstName: string,
   lastName: string,
   age: number
}

function details(user: userType){
    console.log("First Name : ",user.firstName);
    console.log("Last Name : ",user.firstName);
    console.log("Age : ",user.age);
}
details({
	firstName: "harkirat",
	lastName: "singh",
	age: 21,
})
