var tup1=[10,"abc",true];
console.log(tup1[0]);
console.log(tup1.length);
for(var v of tup1)
console.log(v);
tup1[2]=false;
var[i1,i2,i3]=tup1;console.log("second Item:" +i2);