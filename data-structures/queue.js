/* globals module */
"use strict";

class Queue {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.unshift(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.length === 0;
    }
    get length() {
        return this.items.length;
    }
}

module.exports.getQueue = () => new Queue();
module.exports.Queue = Queue;
