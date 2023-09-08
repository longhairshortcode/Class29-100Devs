//the js way ch 9 OOP reading's coding assignments


//Dogs

class Dog{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }

    barks(){
        console.log("Woof! Woof!");
    }

}


//So, in this context, you would typically add the properties 
//(e.g., gold and keys) and methods (e.g., addGold, addKeys, describeInventory)
//to the existing Character class to fulfill the task's requirements.

//Character Inventory

class Character{
    constructor(name, health, strength, xp){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = xp;
        this.gold = 10;
        this.key = 1;
    }
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold, and ${this.key} key(s)`;
    }
    attack(target) {
        if (this.health > 0) {
          const damage = this.strength;
          console.log(
            `${this.name} attacks ${target.name} and causes ${damage} damage points`
          );
          target.health -= damage;
          if (target.health > 0) {
            console.log(`${target.name} has ${target.health} health points left`);
          } else {
            target.health = 0;
            const bonusXP = 10;
            console.log(
              `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
            );
            this.xp += bonusXP;
            this.gold += target.gold;
            this.key += target.key;
          }
        } else {
          console.log(`${this.name} can’t attack (they've been eliminated)`);
        }
      }

}






/// CHAT ANSWER
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
      this.gold = 10; // Start with 10 gold
      this.keys = 1; // Start with 1 key
    }
  
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
        target.health -= damage;
  
        if (target.health <= 0) {
          target.health = 0;
          const bonusXP = 10;
          console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
  
          // Transfer gold and keys from the victim to the victor
          this.gold += target.gold;
          this.keys += target.keys;
          target.gold = 0;
          target.keys = 0;
  
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
  
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} strength, ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key(s).`;
    }
  }
  
  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());
  
  const monster = new Character("Spike", 40, 20);
  console.log("A wild monster has appeared: it's named " + monster.name);
  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);
  
  console.log(aurora.describe());
  console.log(glacius.describe());



  //Account List

  class Account{
    constructor(name){
        this.name = name;
        this. balance = 0;
    }

    credit(value){
        this.balalnce += value;
    }

    describe(){
        `owner: ${this.name}, balance: ${this.balance}`
    }
  }