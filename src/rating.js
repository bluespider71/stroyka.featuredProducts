import { LightningElement, api } from 'lwc';

export default class Rating extends LightningElement {
    @api
    count=0;

    displayStars="";
    renderedCallback() {
        for (let i = 0;i < this.count; i ++) {
            this.template.querySelectorAll(".rate > label")[i].className="selected";
        }
    }
}