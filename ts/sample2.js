var tup1 = [10, "abc", true];
console.log(tup1[0]);
console.log(tup1.length);
for (var _i = 0, tup1_1 = tup1; _i < tup1_1.length; _i++) {
    var v = tup1_1[_i];
    console.log(v);
}
tup1[2] = false;
var i1 = tup1[0], i2 = tup1[1], i3 = tup1[2];
console.log("second Item:" + i2);
