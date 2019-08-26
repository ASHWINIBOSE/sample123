import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import {MsgService} from '../msg.service'

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {
val1;
val2;
a;
b;
wmsg;
  constructor(private ds:CalcService,private ms:MsgService) { }
  public result(a,b){
   this.val1= this.ds.add(parseInt(a),parseInt(b));
     }
   public  sub(a,b){
  this.val2= this.ds.diff(parseInt(a),parseInt(b));
     }
public show(){
  this.ms.getdata().subscribe(data=>
    {
this.wmsg=data;
console.log("data")
    });
}
  ngOnInit() {
    
  }

}
