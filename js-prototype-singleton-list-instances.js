// Imported 
var UUID = new UUIDGenerator();

const BackendService = {
  getUsers: function () {
    return [
      {
        id: 'ce118ed1-03e6-48b2-becf-48cef837f895',
        name: 'Leya',
        surname: 'Morgana',
        mail: 'leya.morgana@starwars.com',
      },
      {
        id: '260a7692-437b-4fee-a15d-41dc2fcb6cd8',
        name: 'Han',
        surname: 'Solo',
        mail: 'han.solo@starwars.com',
      },
    ];
  }
}

const User = function (data) {
  this.id = data.id ? data.id : UUID.generate();
  this.name = data.name;
  this.surname = data.surname;
  this.mail = data.mail;
  this.fullName = `${data.name} ${data.surname}`;
}

User.prototype.get = function (attr) {
  return this[attr];
}

// https://openbook.rheinwerk-verlag.de/javainsel/06_001.html#u6.9
var UserBase = function (allUsers) {
  // Only one Instance should be usable 
  if (typeof UserBase.instance === 'object') {
    return UserBase.instance;
  }
  this.allUsers = allUsers.map((user) => {
    return new User(user);
  });
  UserBase.instance = this;
}

UserBase.prototype.findUserById = function (uuid) {
  const user = this.allUsers.filter(user => {
    console.log(user);
    if (user.id === uuid) {
      return user;
    }
  })[0];
  // Only first occurence needed 
  // Can only occure one time 
  return user;
}

UserBase.prototype.add = function (user) {
  this.allUsers.push(new User(user));
}


const response = BackendService.getUsers();
const userbase1 = new UserBase(response);

// Singleton, so userbase2 get's the same instance 
// const userbase2 = new UserBase(response);
const someUser = userbase1.findUserById('ce118ed1-03e6-48b2-becf-48cef837f895');

userbase1.add({
  name: 'Luke',
  surname: 'Skywalker',
  mail: 'luke.skywalker@starwars.com',
});

console.log(someUser);
