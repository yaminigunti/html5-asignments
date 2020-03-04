function PrintMessage(message:String,...names:String[])
{
    for(let n of names)
    console.log(message +" " +n);
}
PrintMessage("hello","ben","joe");
PrintMessage("hi","scott","anders","tom");
