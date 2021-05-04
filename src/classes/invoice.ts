import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice{

  constructor(
    readonly client: string,
    private details: string,
    public amount: number){
  }

  format(){
    return `${this.client} owes Tk ${this.amount} for ${this.details}`;
  }
}