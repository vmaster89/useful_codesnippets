// What happens when I'm bored 
// Also bored? Well then check this out: https://www.dofactory.com/javascript/design-patterns/
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


let aCat = new Cat();
aCat.set('name', 'fatcat')
aCat.sayHello()

let bCat = new Cat();
bCat.set('name', 'doggo')
bCat.sayHello()

let observer = new Subject();
observer.subscribe(aCat);
observer.subscribe(bCat);

aCat.sayHello();
// bCat.sayHello();

observer.informAll();
