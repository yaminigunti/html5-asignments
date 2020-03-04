var payment;
(function (oayment) {
    oayment[oayment["cash"] = 0] = "cash";
    oayment[oayment["credit"] = 1] = "credit";
    oayment[oayment["NEFT"] = 2] = "NEFT";
})(oayment || (oayment = {}));
;
var TransportMode;
(function (TransportMode) {
    TransportMode[TransportMode["road"] = 10] = "road";
    TransportMode[TransportMode["rail"] = 20] = "rail";
    TransportMode[TransportMode["air"] = 30] = "air";
})(TransportMode || (TransportMode = {}));
;
var tm = TransportMode.air;
console.log(tm);
console.log(TransportMode[tm]);
