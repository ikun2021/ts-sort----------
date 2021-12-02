import { Sorter } from "./Sorter";

class Node{
  next: Node|null =null;
  constructor(public data:number){}
}

//子类没有创建constructor，就不需要super()
export class LinkedList extends Sorter{
  head: Node|null=null;

  add(data:number):void{
    const node = new Node(data);
    if(!this.head){
      this.head = node;
      return;
    }
    //找到最后一个node，在后面加上新建的node
    let tail=this.head;
    while(tail.next){
      tail=tail.next;
    }
    tail.next=node;
  }

  get length():number{
    if(!this.head){
      return 0;
    }

    let count=1;
    let tail = this.head;
    while(tail.next){
      count++;
      tail=tail.next;
    }
    return count;
  }

  at(index:number):Node{
    if(!this.head){
      throw new Error('Index out of bounds');
    }
    let count=0;
    let node: Node|null =this.head;
    while(node){
      if(count===index){
        return node;
      }
      count++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex:number,rightIndex:number):boolean{
    if(!this.head){
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data>this.at(rightIndex).data;
  }
  

  //为了简化，只换值，不换节点~~~
  swap(leftIndex:number,rightIndex:number):void{
    let temp = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = temp;
  }

  print():void{
    if(!this.head){
      return;
    }

    let node:Node|null = this.head;
    while(node){
      console.log(node.data);
      node = node.next;
    }
  }
}