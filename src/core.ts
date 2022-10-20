class Core {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say(val: string) {
    console.log(this.name + `say ${val}`);
  }
}

export { Core };
