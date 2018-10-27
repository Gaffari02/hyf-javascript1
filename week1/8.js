var name = 'John';
 console.log("The value of my variable name is: 'John'");
 console.log("The type of my variable name is: 'string'"  )
 var age = 30;
 console.log("The value of my variable age is: '30'");
 console.log("The type of my variable age is: 'number'");
 var country = 'US';
 console.log("The value of my variable country is :'US'");
 console.log("The type of my variable country is: 'string'");
 var favNumber = 7;
 console.log("The value of my variable favNumber is :'7'");
 console.log("The type of my variable favNumber is: 'number'");

 var typeName = typeof(name);
 var typeAge = typeof(age);
 var typeCountry = typeof(country);
 var typefavNumber = typeof(favNumber);

 if ( typeName === typeAge) {
     console.log('same type');
 } else {
     console.log('not same type');
 }

console.log('We can compare types of other variables using same program')