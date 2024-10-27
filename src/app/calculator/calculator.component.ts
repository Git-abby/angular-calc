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
    // Prevent adding two operators in a row
    if (
      ['+', '-', '*', '/'].includes(num) &&
      ['+', '-', '*', '/'].includes(this.stringToEval.slice(-1))
    ) {
      return;
    }
    this.stringToEval = this.stringToEval + num;
  }
  get_answer() {
    //condition for catching undefined stringToEval
    // if (this.stringToEval != '') {
    //   this.stringToEval = eval(this.stringToEval);
    //   console.log(this.stringToEval);
    // }

    if(this.stringToEval){
      try{
        this.stringToEval = eval(this.stringToEval).toString(); 
      }catch(error){
        this.stringToEval = "Error"
      }
    }
  }
  clear_output() {
    this.stringToEval = '';
  }
}
