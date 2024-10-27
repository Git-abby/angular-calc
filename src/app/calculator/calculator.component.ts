import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  stringToEval: string = '';

  //methods to take input from the keys
  to_get_keys(num: string) {
  
    this.stringToEval = this.stringToEval + num;
    console.log(this.stringToEval);
  }
  get_answer() {
    //condition for catching undefined stringToEval
    if (this.stringToEval != '') {
      this.stringToEval = eval(this.stringToEval);
      console.log(this.stringToEval);
    }
  }
  clear_output() {
    this.stringToEval = '';
  }
}
