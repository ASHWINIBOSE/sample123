import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  viewc:boolean
  product:any[]=[];
  cart:any[]=[];
  
  constructor() { 
    this.product=[{name:"printer",price:8000,company:"hp"},{name:"scanner",price:12000,company:"hp"},{name:"keyboard",price:1800,company:"hp"}]
    
  }

  ngOnInit() {
  }
  public add(i){
    let data=this.product[i];
    this.cart.push(data)
  }
  public remove(d){
    let data=this.cart[d]
    this.cart.splice(data,1)
  }
  public view(){
  this.viewc=true
  }
  public hide(){
  this.viewc=false
  }
  }
