simpleGreetProvider = function(){
    return "Hello ";
}

timelyGreetProvider = function(){
    greet="";

    hour = (new Date()).getHours();

    if (hour>=3 && hour<=11) greet="Good Morning ";
    else if(hour<=15) greet="Good Afternoon ";
    else greet="Good Evening ";

    return greet;
}

function greetUser(userName,greetProvider){
    return greetProvider() + " " + userName;
}
console.log(greetUser("Sri", simpleGreetProvider));

console.log(greetUser("Sri",timelyGreetProvider));

console.log(greetUser("Sri", function() { return "Sasriakal ";}));

console.log(greetUser("Vam",()=>"Namasthey "));

console.log(greetUser("Vam",()=>"Vanakkam "));
console.log(greetUser("Vam",()=>"Namaskar "));
(function(){
    console.log("has to execute her right away..!");    
})();