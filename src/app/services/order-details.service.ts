import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


//fooddetails

foodDetails =  [
  {
    id:1,
    foodName:"Cheese Burger",
    foodDetails:"Extra Cheese and Spicy Burger",
    foodPrice:250,
    foodImg:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:2,
    foodName:"Chapathi Set",
    foodDetails:"2 pieces of Soft Chapathies",
    foodPrice:60,
    foodImg:"https://th.bing.com/th/id/OIP.hY_hNVhdUpOSzzinX_A9BQHaHa?w=199&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id:3,
    foodName:"Choco Milkshake",
    foodDetails:"Extra chocolate and scoops",
    foodPrice:90,
    foodImg:"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY28lMjBNaWxrc2hha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:4,
    foodName:"Chicken Fried Rice",
    foodDetails:"Spicy chicken Fried Rice",
    foodPrice:160,
    foodImg:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMEZyaWVkJTIwUmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:5,
    foodName:"Family Pizza",
    foodDetails:"8+ pieces of extra cheesy Family Pizza",
    foodPrice: 400,
    foodImg:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEZhbWlseSUyMFBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:6,
    foodName:"Paneer Tikka",
    foodDetails:"Extra spicy Paneer Tikka Combo of 4 pieces",
    foodPrice: 350,
    foodImg:"https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFBhbmVlciUyMFRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:7,
    foodName:"Donut",
    foodDetails:"Flavoured donuts",
    foodPrice: 90,
    foodImg:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9udXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:8,
    foodName:"Sandwich",
    foodDetails:"Sandwich",
    foodPrice: 100,
    foodImg:"https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:9,
    foodName:"Strawberry cheesecake",
    foodDetails:"Strawberry jam layered cake",
    foodPrice: 90,
    foodImg:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
  },
  {
    id:10,
    foodName:"Paneer pizza(medium)",
    foodDetails:"Grilled paneer pizza",
    foodPrice: 200,
    foodImg:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:11,
    foodName:"Chicken biriyani",
    foodDetails:"Spicy and aroma rich biriyani",
    foodPrice: 170,
    foodImg:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:12,
    foodName:"Pav Bajji",
    foodDetails:"8 Soft baked buns with thick kuruma",
    foodPrice: 150,
    foodImg:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:13,
    foodName:"Samosa",
    foodDetails:"Set of 4 Crunchy samosas ",
    foodPrice: 60,
    foodImg:"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:14,
    foodName:"South Indian Meals combo",
    foodDetails:"Contains all traditional South Indian dishes",
    foodPrice: 150,
    foodImg:"https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:15,
    foodName:"Veg noodles",
    foodDetails:"Noodles cooked in Chinese style",
    foodPrice: 130,
    foodImg:"https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:16,
    foodName:"Brownies",
    foodDetails:"Set of 2 chocolate rich brownies",
    foodPrice: 100,
    foodImg:"https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
  },
  {
    id:17,
    foodName:"Chocolate Icecream cake",
    foodDetails:"Chilled and soft Icecream cake",
    foodPrice: 80,
    foodImg:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id:18,
    foodName:"Oreo cupcake",
    foodDetails:"Oreo crumbles topped cupcaked",
    foodPrice: 60,
    foodImg:"https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  }

]

}
