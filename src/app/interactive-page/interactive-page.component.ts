import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-page',
  templateUrl: './interactive-page.component.html',
  styleUrls: ['./interactive-page.component.scss']
})
export class InteractivePageComponent {
  sourceNames: Array<string> = [
    'interactive-page/interactive-page.component.html',
    'interactive-page/interactive-page.component.ts'
  ];

  pizzaBases = ['Margherita', 'Pepperoni', 'Four seasons', 'Texas', 'Four cheeses'];
  sauces = ['Tomato', 'BBQ', 'Garlic', 'Texas', 'Tiramisù'];

  id = 1
  flour = "";
  basePizza = "";
  sauce = "";
  toppings: Array<string> = [];
  crustCheese = "No";
  finalPizza = "";

  selectFlour(event: any) { this.flour = event.target.value; }

  selectBase(event: any) { this.basePizza = event.source.value; }

  selectSauce(event: any) { this.sauce = event.source.value; }

  checkedTopping(event: any) {
    const sameToppingIdx = this.toppings.indexOf(event?.source?.value);
    if (event.source.checked == true) {
      this.toppings?.push(event.source.value);
    } else {
      this.toppings?.splice(sameToppingIdx, 1);
    }
  }
  selectCheese(event: any) { this.crustCheese = event.target.value; }

  buildFinalPizza() {
    if (!this.flour) {
      this.finalPizza = "Please select a flour type for your pizza.";
    }
    else if (!this.basePizza) {
      this.finalPizza = "Please select a pizza."
    }
    else if (!this.sauce) {
      this.finalPizza = "Please select a sauce for your pizza."
    }
    else {
      this.finalPizza = "You have selected a " + this.basePizza + " with " + this.flour + " dough, " + this.sauce + " sauce";
      if (this.toppings.length) this.finalPizza = this.finalPizza + ", and a topping of " + this.toppings;
      if (this.crustCheese === "Yes") this.finalPizza = this.finalPizza + " (extra-cheese inside the crust)";

      this.finalPizza = this.finalPizza + ".";

      let finalPizzaData = {
        "id": this.id.toString(),
        "pizza": this.basePizza,
        "flour": this.flour,
        "sauce": this.sauce,
        "toppings": this.toppings,
        "stuffedCrust": this.crustCheese
      };

      this.id += 1;
      let previousPizzas = JSON.parse(localStorage.getItem('pizzasData') ?? "[]");
      previousPizzas.push(finalPizzaData);
      localStorage.setItem('pizzasData', JSON.stringify(previousPizzas));
    }
  }

  resetFinalPizza() { this.finalPizza = ""; }
}
