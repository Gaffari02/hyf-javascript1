function vehicletype (color,code) {
    if (code == 1) {
        console.log("a " + color + " motorbike");
    }
    else if (code == 2) {
        console.log("a " + color + " car");
    }
    else console.log("not valid");

}

console.log(vehicletype("blue",2));
console.log(vehicletype("yellow",1));
console.log(vehicletype("blue",0));