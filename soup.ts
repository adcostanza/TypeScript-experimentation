class Soup {
  ingredients: string;
  name: string;
  id: number;
  cookTime: string;
  cookUnitOfMeasure: string = "hours";
  constructor (name:string, ingredients: string, cookTime: string) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
  }
  printIngredients(): void {
    console.log(this.ingredients);
  }
  printCookTime(): void {
    console.log(this.cookTime);
  }
  printBoth(): void {
    console.log(this.ingredients + " " + this.cookTime + " " + this.cookUnitOfMeasure)
  }
  addPotatoToIngredients(): void {
    this.ingredients = this.ingredients + " and potato";
    this.printIngredients();
  }
}

let frenchSoup: Soup = new Soup("onion bliss","onions","7");
frenchSoup.printBoth();
frenchSoup.addPotatoToIngredients();
frenchSoup.printBoth();
