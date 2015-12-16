'use strict';

// Concerned with extension of preexisting objects
// Useful for going from Hobbit to HobbitWithSword and similar w/o really subclassing
class Pokemon {
  constructor(name, type){
    this.name = name || 'Pikachu';
    this.type = type || 'Generic';
  }
  attack(){
    console.log(`I, <${this.name}>, am attacking!!!`);
  }
}

// Our new object
let Chuuu = new Pokemon();


// Let's decorate Chuuu ()
Chuuu.attack = function () {
  this.attacked = true;
  console.log(`I, <${this.name}>, am attacking!!!`);
  console.log('KAPOW');
  if (this.attacked) {
    console.log('I attacked :]');
  }
}

Chuuu.attack(); // expect output!

// Let's try another example

class Macbook {
  constructor(){
    this.cost = () => 1800;
    this.screensize = () => 15;
  }
}

let myMacBook = new Macbook();
console.log(myMacBook);