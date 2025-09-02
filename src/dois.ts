class X {
  um(): void {
    console.log("Um");
  }
}

class Y extends X {
  dois() {
    super.um();
    console.log("Dois");
  }
}

class Z extends Y {
  tres() {
    super.dois();
    console.log("Três");
  }
}

const z = new Z();
z.tres();
