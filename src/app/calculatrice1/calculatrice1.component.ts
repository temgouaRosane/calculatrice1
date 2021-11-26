import { Component } from '@angular/core';

@Component({
  selector: 'calculatrice1',
  templateUrl: './calculatrice1.component.html',
  styleUrls: ['./calculatrice1.component.css']
})
export class Calculatrice1Component{
  result: string='';
  longButtons: string[]= ['Effacer tout', '<-'];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  private preValue: string ='';
  private curValue: string ='';

  addToExpression(value: string){
    if(this.result == "0"){
      this.result = '';
    }



    if(this.result !=''){
      this.preValue = this.curValue;
      this.curValue = value;
    }

    if(value =='Effacer tout'){
      this.result='';

    }else if(value =='<-'){
      this.result = this.preValue != "=" ? this.result.slice(0, -1) : this.result;

    }else if(value == '='){
      this.result = eval(this.result);

    }else if(value == '+' || value == '-' || value == '*' || value == '/'){
      if(this.result[this.result.length-1]=='+' || this.result[this.result.length-1]=='*' || this.result[this.result.length-1]=='/' || this.result[this.result.length-1]=='-'){
        this.result = this.preValue != "=" ? this.result.slice(0, -1) : this.result;
      }
      this.result +=value;
    }else{
      this.result +=value;
    }
  }


}
