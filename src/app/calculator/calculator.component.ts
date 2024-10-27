import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  // Holds the current expression or result to be evaluated or displayed
  stringToEval: string = '';

  // Method to handle key inputs from the calculator UI
  to_get_keys(num: string) {
    // Check if the last character and the current input are both operators
    // Prevents cases like "++", "--", "**", "//" from being added consecutively
    if (
      ['+', '-', '*', '/'].includes(num) &&
      ['+', '-', '*', '/'].includes(this.stringToEval.slice(-1))
    ) {
      return; // Exit early if two operators are input consecutively
    }
    
    // Append the input (number/operator) to the current expression
    this.stringToEval += num;
  }

  // Method to evaluate the expression in `stringToEval` and display the result
  get_answer() {
    // Ensure there is an expression to evaluate
    if (this.stringToEval) {
      try {
        // Evaluate the expression and convert the result to a string
        // This conversion ensures further string operations (like adding an operator) work without errors
        this.stringToEval = eval(this.stringToEval).toString();
      } catch (error) {
        // In case of an invalid expression, display "Error" to the user
        this.stringToEval = "Error";
      }
    }
  }

  // Method to clear the current input/output display
  clear_output() {
    // Resets `stringToEval` to an empty string, clearing the display
    this.stringToEval = '';
  }
}
