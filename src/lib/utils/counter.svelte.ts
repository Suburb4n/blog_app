// function createCounter(){
// 	let count = $state(0);
//     $effect(()=>{

//     })
//     return{
//         get value(){return count},
//         increment: ()=>{count += 1},
//         reset:()=>{count = 0},
//     }
// }
// export default createCounter;

// class Counter{
//     value = $state(0);

//     increment = ()=>{
//         this.value++;
//     }
//     reset = ()=>{
//         this.value = 0
//     }
// }
// export default Counter

let count = $state(0);

export function getCount(){
    return count;
}
export function increment(){
    count++
}
export function reset(){
    count = 0;
}