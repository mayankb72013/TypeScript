function use(fn: ()=>void){
    setTimeout(fn,1000);
}
console.log("After 1sec = ");
use(function (){
    console.log("Done");
})
