import { Component } from '@angular/core';
import { PasswordGenerator } from 'src/Model/password-generator.model';
import { RandomPasswordService } from './random-password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordGenerator';
  private useLetters: boolean = false;
  private useNumbers: boolean = false;
  private useSymbols: boolean = false;
  private passwordLength: number = 0;

  generatedPassword: string = "";
  private passwordGenerator : PasswordGenerator = new PasswordGenerator();
  constructor(
    private randomPasswordService : RandomPasswordService){

  }

  getTheLength(value) {
    this.passwordLength = parseInt(value);
    this.passwordGenerator.passwordLength = this.passwordLength;
  }
  generatePassword() {   
    this.generatedPassword = this.randomPasswordService.generateRandomPassword(this.passwordGenerator);
    console.log(this.generatedPassword);
  }

  getCheckBoxValue(evnt: any) {

    switch (evnt.target.id) {
      case ("useLetters"):
        this.useLetters = evnt.target.checked;
        this.passwordGenerator.useLetters =  this.useLetters ;
        break;
      case ("useNumbers"):
        this.useNumbers = evnt.target.checked;
        this.passwordGenerator.useNumbers =  this.useNumbers;
        break;
      case ("useSymbols"):
        this.useSymbols = evnt.target.checked;
        this.passwordGenerator.useSymbols = this.useSymbols;
        break;
    }
  }
}
