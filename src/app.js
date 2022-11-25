import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Bestsellers";
  bestProducts = [
    {id: 0, name: "Electric Planer Brandix KL370090G 300 Watts", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-1.jpg", badge: "NEW", price: "$749.00", rate: 4, reviews: 12 },
    {id: 1, name: "Undefined Tool IRadix DPS3000SY 2700 Watts", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-2.jpg", badge: "HOT", price: "$1019.00", rate: 5, reviews: 3 },
    {id: 2, name: "Drill Screwdriver Brandix ALX7054 200 Watts", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-3.jpg", badge: "", price: "$850.00", rate: 4, reviews: 8 },
    {id: 3, name: "Drill Series 3 Brandix KSR4590PQS 1500 Watts", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-4.jpg", badge: "SALE", price: "$949.00", rate: 3, reviews: 15 },
    {id: 4, name: "Brandix Router Power Tool 2017ERXPK", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-5.jpg", badge: "NEW", price: "$1700.00", rate: 4, reviews: 2 },
    {id: 5, name: "Brandix Drilling Machine DM2019KW4 4kW", image: "https://stroyka.vue.themeforest.scompiler.ru/themes/yellow/images/products/product-6.jpg", badge: "NEW", price: "$3199.00", rate: 3, reviews: 21 },
  ];
  bestFirstProduct = this.bestProducts[0];
}
