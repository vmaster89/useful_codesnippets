class Animal {
  sayHello(name) {
    console.log("Hello " + this.name); 
  }
  set(key, value) {
    this[key] = value;
  }
  get(key) {
    return this[key];
  }
}

class Cat extends Animal {
  constructor() {
    super();
    this.name = super.name;
  }
  sayBye() {
    console.log("Bye " + this.name); 
  }
}

class Subject {
	constructor() {
  	this.observers = []; 
  }
  
  subscribe(observer) {
  	this.observers.push(observer); 
  }
  
  unsubscribe(observer) {
  	let i = this.observers.indexOf(observer); 
    if ( i > -1 ) {
    	this.observers.slice(i, 1); 
    }
  }
   
  informAll() {
  	this.observers.forEach( (item) => {
    	console.log(item.name, " has been informed");
    }); 
  } 
}

class SingleDog extends Animal {
	constructor() {
  	super();
    this.name = super.name; 
    if (!this.instance) {
    	this.instance = this;
    }
    return this.instance;
  }
}

let aCat = new Cat();
aCat.set('name', 'fatcat')
aCat.sayHello()

let bCat = new Cat();
bCat.set('name', 'smallcat')
bCat.sayHello()

let singleDog = new SingleDog();
singleDog.set('name', 'RealDog'); 
singleDog.sayHello();

// Following code does not work 
// Because of a Singleton logic 
/* let testDog = SingleDog();
testDog.set('name', 'AnotherDog');
testDog.sayHello(); */ 
// Alternative: Object.freeze(instance); 

let observer = new Subject();
observer.subscribe(aCat);
observer.subscribe(bCat);

aCat.sayHello();
// bCat.sayHello();

observer.informAll();

// Factory 
class Customer {
	constructor(name) {
  	this.name = name; 
  }
  say () {
  	console.log(`My name is customer ${this.name}`)
  }
}

class CustomerFactory {
  create (name) {
  	return new Customer(name);
  }
}

class SalesEmployee {
	constructor(name) {
  	this.name = name; 
  }
  say () {
  	console.log(`My name is SalesEmployee ${this.name}`)
  }
}

class SalesEmployeeFactory {
  create (name) {
  	return new SalesEmployee(name);
  }
}

const peoples = [];
const customerFactory = new CustomerFactory(); 
const salesEmployeeFactory = new SalesEmployeeFactory(); 

peoples.push(customerFactory.create('Harry Potter'));
peoples.push(salesEmployeeFactory.create('Darth Vater'));

peoples.forEach( (item) => {
	item.say();
});
