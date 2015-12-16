'use strict';

const test = require('tape');

// Concerned with extension of preexisting objects
// Useful for going from Hobbit to HobbitWithSword and similar w/o really subclassing
class Pokemon {
  constructor(name, type) {
    this.name = name || 'Pikachu';
    this.type = type || 'Generic';
  }
  attack() {
    console.log(`I, <${this.name}>, am attacking!!!`);
  }
}

// Our new object
let Chuuu = new Pokemon();

// Let's decorate Chuuu ()
Chuuu.attack = function() {
    this.attacked = true;
    console.log(`I, <${this.name}>, am attacking!!!`);
    console.log('KAPOW');
    if (this.attacked) {
      console.log('I attacked :]');
    }
  }
  // expect output!

test('simplistic decorator example', (t) => {
  Chuuu.attack();
  t.ok(Chuuu.attacked, 'It should have attacked and added an attacked property');
  t.end();
})

// Let's try another example w/ more robustness
class Macbook {
  constructor() {
    this.cost = () => 1800;
    this.screensize = () => 15;
  }
}

// a decorator
function addMemory(macbook) {
  let baseCost = macbook.cost();
  // We are 'decorating' the method w/ new functionality
  macbook.cost = function() {
    return baseCost + 400;
  }
}

function appleCare(macbook) {
  let baseCost = macbook.cost();
  macbook.cost = function() {
    return baseCost + 200;
  }
}

function upgradeCPU(macbook) {
  let baseCost = macbook.cost();
  macbook.cost = function() {
    return baseCost + 600;
  }
}


test('(more) advanced decorator usage', (t) => {
  let myMacBook = new Macbook();
  // Run the decorators
  addMemory(myMacBook);
  upgradeCPU(myMacBook);
  appleCare(myMacBook);

  t.equals(myMacBook.screensize(), 15, 'The screensize method should remain the same since we never touched it');
  t.equals(myMacBook.cost(), 3000, 'We can now use the decorated method #cost(), which should give us a larger overall total');
  t.end();
})