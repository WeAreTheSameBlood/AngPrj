import { Component, OnInit } from '@angular/core';

interface Order {
  name:string,
  description:string,
  price:number,
  amount:number
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  categories: string[];
  otherProducts: string[];

  isEdit:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.order = {
      name: "Radio control car",
      description: "This is radio control car description. BlaBlaBlaBLa",
      price: 150,
      amount: 4
    }
    this.categories = ["Clothes", "Office", "Books"];
    this.otherProducts = ["Ball", "Aircraft", "Helicopter"];
  }

  selectProd(productName: string) {
    switch (productName) {
      case "Helicopter": {
        this.order = {
          name: "Helicopter",
          description: "This is Helicopter description. BlaBlaBlaBLa",
          price: 228,
          amount: 2
        }
        break;
      }
      case "Aircraft": {
        this.order = {
          name: "Aircraft",
          description: "This is Aircraft description. BlaBlaBlaBLa",
          price: 322,
          amount: 65
        }
        break;
      }
      case "Ball": {
        this.order = {
          name: "Ball",
          description: "This is Ball description. BlaBlaBlaBLa",
          price: 54,
          amount: 636
        }
        break;
      }
    }
  }

  sendFeedback(message: string) {
    console.log(message);
    return false;
  }

  editProduct() {
    this.isEdit = !this.isEdit;

  }
}
