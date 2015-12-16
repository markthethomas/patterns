// Useful for going from Hobbit to HobbitWithSword and similar w/o really subclassing

class Pokmon {
  constructor(name, type){
    this.name = name || 'Pikachu';
    this.type = type || 'Generic';
  }
  attack(){
    console.log('I am attacking!!!');
  }
}

// Our new object
let Chuuu = new Pokemon();

// Let's decorate Chuuu
