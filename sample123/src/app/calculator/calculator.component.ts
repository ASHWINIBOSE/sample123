import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  msg:Boolean=false
  cust1:String
 
  a:Number
  d:Number
  constructor() {
    
   }

  ngOnInit() {
  }
public add(){
this.a=parseInt("cust1")

}


}
