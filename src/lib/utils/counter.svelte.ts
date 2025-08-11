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

export default {
    get value(){return count},
    set value(v){ count = v},
    increment:()=>{
        count++
    },
    reset:()=>{
        count = 0
    }
}