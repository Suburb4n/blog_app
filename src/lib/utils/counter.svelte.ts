const count = $state({
    value:0,
})

export default count;
export function increment(){
    count.value++;
}
export function reset(){
    count.value = 0;
}
// class Counter{

//     value = $state(0);

//     increment = ()=>{
//         this.value++;
//     }
//     reset = ()=>{
//         this.value = 0
//     }
// }
// const counter = new Counter()
// export default counter

// let count = $state(0);

// export default {
//     get value(){return count},
//     set value(v){ count = v},
//     increment:()=>{
//         count++
//     },
//     reset:()=>{
//         count = 0
//     }
// }
