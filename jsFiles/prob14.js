// What is the output of the following JS code segments? and Why?

// a)
                 var employee = {
                    firstName: 'Rawan',
                    sayHi: function(){
                      console.log("Hi Coach ! " + this.firstName);
                    }
                }

                 employee.sayHi(); // ?



// ----> >>> answer 
// result shown on console::  Hi coach ! Rawan
// explanation:: console will log the string "Hi Coach !" 
//               then will log the value of "firstName" of the employee object, (i.e. Rawan)



// b)
                // var employee = {
                //     firstName: 'Rawan',
                //     info: {
                //         hasCar: true,
                //         hasPet: true
                //     },
                //     printInfo: function(){
                //         console.log("Car owner? " + this.hasCar);
                //     }
                // }

                // employee.printInfo() // ?


// ----> >>> answer 
// result shown on html::  Car owner? true
// explanation:: the string "Car owner?" will be printed
//               then the value of "hasCar" of the info object




// c) 
                // var employee = {
                //     firstName: 'Rawan',
                //     info: {
                //         hasCar: true,
                //         hasPet: true,
                //         printAddress: function(){
                //             return this.data.address;
                //         },
                //         data: {
                //             address: "Zarqa"
                //         }
                //     },
                // }

                // employee.info.printAddress() // ?


// ----> >>> answer 
// result shown on html::  Zarqa
// explanation:: calling back the high function `printAddress` will call another function that returns the address value of another function 
