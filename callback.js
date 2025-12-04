function a(i,callback){
    console.log("Getting a value ",i)
    callback(123,c)
}

// 2 1
// 5 7
// 8 3
 //3+2+7+3

function b(j,callback){
    console.log("Getting b value ",j)
    callback(456,d)
}

function c(k,callback){
    console.log("Getting c value ",k)
    callback(789)
}

function d(l){
    console.log("Getting d value ",l)
}
a(1000,b)
// a(1000,(x)=>{
//     b(x,(y)=>{
//         c(y,(z)=>{
//             d(z)
//         })
//     })
// })