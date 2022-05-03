import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass1';
  simpleCalculatorDisplay  = false;
  scientificCalculatorDisplay= true;
  toggleCalculator(){
    this.simpleCalculatorDisplay = !this.simpleCalculatorDisplay;
    this.scientificCalculatorDisplay = !this.scientificCalculatorDisplay;
  }
}