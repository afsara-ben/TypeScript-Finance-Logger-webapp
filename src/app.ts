// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

import { Payment } from './classes/payment.js';
import { listTemplate } from './classes/listTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from './classes/invoice.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); //prevents the page refreshing

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }
  else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
  list.render(doc, type.value, 'end');
})

