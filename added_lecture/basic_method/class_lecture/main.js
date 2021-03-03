class Robot {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}가(이) 말을 합니다.`);
  }
}

class Ai extends Robot {
  constructor(name) {
    super(name);
  }
  walk() {
    console.log(`${this.name}가(이) 걷습니다.`);
  }
}

// const r = new Robot("mag");
// r.speak();

const a = new Ai("mean");
a.speak();
a.walk();
