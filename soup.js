var Soup = (function () {
    function Soup(ingredients, cookTime) {
        this.cookUnitOfMeasure = "hours";
        this.ingredients = ingredients;
        this.cookTime = cookTime;
    }
    Soup.prototype.printIngredients = function () {
        console.log(this.ingredients);
    };
    Soup.prototype.printCookTime = function () {
        console.log(this.cookTime);
    };
    Soup.prototype.printBoth = function () {
        console.log(this.ingredients + " " + this.cookTime + " " + this.cookUnitOfMeasure);
    };
    Soup.prototype.addPotatoToIngredients = function () {
        this.ingredients = this.ingredients + " and potato";
        this.printIngredients();
    };
    return Soup;
}());
var frenchSoup = new Soup("onions", "7");
frenchSoup.printBoth();
frenchSoup.addPotatoToIngredients();
frenchSoup.printBoth();
//# sourceMappingURL=soup.js.map