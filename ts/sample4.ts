function mul(n1:number,n2?:number):number{
    if(n2)
    return n1*n2;
    else 
    return n1*10;
}
console.log(mul(20,10));
console.log(mul(30));