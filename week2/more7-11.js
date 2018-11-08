let vehicleList = ["motorbike", "caravan", "bike", "car",]; // more javascript 7
console.log(vehicleList[2]); // more javascript 8

function vehicle (color,code,age) {

    let codeType;
    if (code === 1) {
        codeType = vehicleList[0];}
    else if (code === 2) {
        codeType = vehicleList[1];
    } else if (code === 3) {
        codeType = vehicleList[2];
    } else if (code === 4) {
        codeType = vehicleList[3];
    }
    else {
        codeType = "Unknown vehicle";
    }

    let ageType;
    if (age <= 3) {
        ageType = "new";}
    else {ageType = "used";}

    console.log("a " + color + " " + ageType + " " + codeType);

}

console.log(vehicle("green", 3, 1));  // more javascript 9

let type = vehicleList[0];

for( let i = 1; i < vehicleList.length; i++) {
    if (i == vehicleList.length-1) {
        type = `${type}s and ${vehicleList[i]}s`;
    } else type = `${type}s, ${vehicleList[i]}`;
}
console.log(`Amazing Joe's Garage, we service ${type}.`);  // more javascript 10

vehicleList.push("plane");

let type = vehicleList[0];

for( let i = 1; i < vehicleList.length; i++) {
    if (i == vehicleList.length-1) {
        type = `${type}s and ${vehicleList[i]}s`;
    } else type = `${type}s, ${vehicleList[i]}`;
}
console.log(`Amazing Joe's Garage, we service ${type}.`);  // more javascript 11
