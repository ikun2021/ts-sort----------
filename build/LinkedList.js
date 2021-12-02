"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//子类没有创建constructor，就不需要super()
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        //找到最后一个node，在后面加上新建的node
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let count = 1;
        let tail = this.head;
        while (tail.next) {
            count++;
            tail = tail.next;
        }
        return count;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    //为了简化，只换值，不换节点~~~
    swap(leftIndex, rightIndex) {
        let temp = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = temp;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
