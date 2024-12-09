// 'type' also provides some additional features apart from interfaces

//#1 unions

type son = string | number;

function test(id: son){
   console.log("ID : ",id);
}
console.log("Union : ");
test(101);
test("202");

//Intersection
console.log("\nIntersection :: ")
type item1 = {
    spec1: string,
    spec2: number
}
type item2 = {
    spec2: number,
    spec3: boolean
}
type latest = item1 & item2;

function print(data: latest){
   console.log(data.spec1,data.spec2,data.spec3);
}
print({
    spec1:"1",
    spec2:2,
    spec3:true
})
