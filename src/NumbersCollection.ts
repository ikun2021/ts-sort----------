import { Sortable, Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor( public data:number[]){
    super();
  }
  
  //这种写法相当于是length is a property
  get length():number{
    return this.data.length;
  }

  compare(leftIndex:number,rightIndex:number):boolean{
    return this.data[leftIndex]>this.data[rightIndex];
  }

  swap(leftIndex:number,rightIndex:number):void{
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

}