function f1(n, s) {
    console.log("Value of " + n + ", Type is " + typeof (n));
    if (s) {
        console.log("Second Parameter : " + s);
    }
}
f1("ABC");
f1(10);
f1(100, "PQR");
