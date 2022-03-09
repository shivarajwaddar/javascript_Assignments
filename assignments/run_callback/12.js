
function myfun(a,b,cb){
    let sum1=a+b;
    return cb(sum1)
}
function cb(sum){
    return(sum*2)
}
console.log(myfun(3,4,cb))