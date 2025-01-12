// class Animal{
//     constructor(name, type, sound){
//         this.name=name;
//         this.type=type;
//         this.sound=sound;
//     }

//      set makesound(cat){
//        console.log(`${this.name} is making sound`);
//     }
  

// }

// const Animal1 = new Animal("wolf", "Catus", "wuuu")

// class Cat extends Animal{
//     constructor(name, type, sound, color){
//        this.name=name;
//         super(type);
//         this.sound=sound;
//         this.color=color;
//     }

//  get fullInfo(){
//     console.log(`${this.name} is running, its type is ${this.type}, its sound is ${this.sound} color is ${this.color}`);
//  }
// }

// const Cat1= new Cat("Muska", "Catus", "Miaw", "Black")














class Animal {
    constructor(name, type, sound) {
      this.name = name; 
      this.type = type; 
      this.sound = sound; 
    }
  
    
    makeSound() {
      console.log(`${this.name} ovoz chiqardi: ${this.sound}`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name, "mushuk", "meow"); 
    }
  
    tirnash() {
      console.log(`${this.name} tirnoq ishlatyapti!`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name, "it", "woof"); 
    }
  
    tayoqolibkelish() {
      console.log(`${this.name} tayoq olib kelyapti!`);
    }
  }
  
  // Misol
  const myCat = new Cat("Mushukcha");
  myCat.makeSound(); 
  myCat.tirnash(); 
  
  const myDog = new Dog("Bobik");
  myDog.makeSound(); 
  myDog.tayoqolibkelish(); 
  