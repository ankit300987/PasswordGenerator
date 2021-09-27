import { Injectable } from '@angular/core';
import { PasswordGenerator } from 'src/Model/password-generator.model';

@Injectable({
  providedIn: 'root'
})
export class RandomPasswordService {

  constructor() { }

  generateRandomPassword(passwordGenerator: PasswordGenerator) {
    const numbers = '1234567890';
    const letters = 'abcdEfgHIjklmnOPQrsTnuWXyz';
    const specialChar = '!@#$';
    let paswordLen = passwordGenerator.passwordLength;
    let randomPassword = '';
   
    let i : number = 0 ;
    while (i <= paswordLen) {

      if (passwordGenerator.useLetters) {
        randomPassword += this.getRandomString(letters, 1);
        console.log(i + "-->" + randomPassword);
        i++;
      }
      if (i >= paswordLen) {
        console.log(i + "--> after letters");
        break;
      }
      
      if (passwordGenerator.useNumbers) {
        randomPassword += this.getRandomString(numbers, 1);
        console.log(i + "-->" + randomPassword);
        i++;
      }
      if (i >= paswordLen) {
        console.log(i + "--> after numbers");
        break;
      }
      if (passwordGenerator.useSymbols) {
        randomPassword += this.getRandomString(specialChar, 1);
        console.log(i + "-->" + randomPassword);
        i++;
      }
    }
    return randomPassword;
  }

  getRandomString(source: string, stringLength: number): string {
    let randomString = '';
    if ((source.trim().length < 0) || (source.trim().length < stringLength)) {
      return randomString;
    }
    let randlomValue = this.getRandomInt(1, source.length-1);
    randomString = source.substr(randlomValue, stringLength);
    console.log(randomString + "-->"+ randlomValue + "source'" + source + "'  should have "+ source.substr(randlomValue, stringLength));
    return randomString;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
  }
}
