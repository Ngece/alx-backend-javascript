0-classroom.js              Contains a class named ClassRoom that accepts one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize.



1-make_classrooms.js        Imports the ClassRoom class from 0-classroom.js and Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).



2-hbtn_course.js            Implements a class named HolbertonCourse with constructor attributes: name (String), length (Number), students (array of Strings).



3-currency.js               Implements a class named Currency with constructor sttributes: code (String), name (String) and a method named displayFullCurrency that will return the attributes in the following format name (code).



4-pricing.js                Imports the class Currency from 3-currency.js and implements a class named Pricing, Implements a method named displayFullPrice that returns the attributes in the following format: amount currency_name (currency_code). Implements a static method named convertPrice that accepts two arguments: amount (Number), conversionRate (Number) and returns the amount multiplied by the conversion rate.



5-building.js               Implements a class named Building with constructor attribute sqft (Number)



6-sky_high.js               Imports Building from 5-building.js and implements a class named SkyHighBuilding that extends from Building with constructor attributes: sqft (Number), floors (Number)



7-airport.js                Implement a class named Airport with constructor attributes: name (String), code (String) and returns the airport code.



8-hbtn_class.js             Implements a class named HolbertonClass with constructor attributes: size (Number), location (String). When the class is cast into a Number, it should return the size. When the class is cast into a String, it should return the location.



9-hoisting.js               Fixed code and made it work for the below output:
bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 




10-car.js                   Implement a class named Car with constructor attributes: brand (String), motor (String), color (String) with a method named cloneCar that returns a new object of the class.



100-evcar.js                Imports Car from 10-car.js then implements a class named EVCar that extends the Car class with constructor attributes: brand (String), motor (String), color (String), range (String). Returns an instance of Car instead of EVCar.
