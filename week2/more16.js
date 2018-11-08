let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

// change o2
o2 = {foo: "bar2"};
console.log(o3); // no change

o1 = { foo: "bar3" };
console.log(o3); // no chage

//replacing
o1 = { foo: 'bar' };
o2 = { foo: 'bar' };
o2 = o3;

//change o2
o2 = { foo: "bar2" };
console.log(o3); // no change

o1 = { foo: "bar3" };
console.log(o3); // no change

o1 = o3 ;
console.log(o3);