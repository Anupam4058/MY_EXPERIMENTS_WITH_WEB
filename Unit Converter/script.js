function temperature(){
    //To convert celcius to farenheit (CEL * 9/5) + 32
    var c = document.getElementById("celsius").ariaValueMax;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
}
function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("Kilo").value;
    var p = kg * 2.2;
    document.getElementById("Pounds").value = p;
}
function distance(){
    //To convert distance from Kms to Miles
    //Kms * 0.62137
    var kms = document.getElementById("Km").value;
    var m = kms * 0.62137;
    document.getElementById("Miles").value = m; 
}