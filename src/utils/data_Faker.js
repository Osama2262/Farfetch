const { faker } = require('@faker-js/faker');

class dataFaker {

  // Getter for fakeName
   static fakeName() {
    return faker.person.firstName();
  }

  // Getter for fakeEmail
  static fakeEmail() {
    return faker.internet.email();
  }

  // Getter for fakePass
  static fakePass() {
    return faker.internet.password(16, true, /[A-Za-z0-9!@#$%^&*(),.?":{}|<>]/);
  }
  static randomNum(){
    return faker.number.int({ min: 1, max: 12 });
  }
  static randomSize()
  {
    return faker.number.int({ min: 2, max: 3 })
  }
}
module.exports=dataFaker;