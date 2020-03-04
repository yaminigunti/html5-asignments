function f1(x:number) : void;
function f1(s:string) : void;
function f1(x:number, s:string) : void;

function f1(n:any, s?:any) {
    console.log(`Value of ${n}, Type is ${typeof(n)}`);
    if (s) {
        console.log(`Second Parameter : ${s}`);
    }
}

f1("ABC");
f1(10);
f1(100, "PQR");