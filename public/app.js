// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Payment } from './classes/payment.js';
import { listTemplate } from './classes/listTemplate.js';
import { Invoice } from './classes/invoice.js';
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//list template instance
var ul = document.querySelector('ul');
var list = new listTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents the page refreshing
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
