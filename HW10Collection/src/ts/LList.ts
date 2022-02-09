import {IList} from "./types";

class Node {
    value: number;
    next: Node;
    constructor(value: number, next: Node) {
        this.value = value;
        this.next = next;

    }

}

export class LList implements IList {
    private readonly array: number [];
    private size: number;

    add: (item) => void;
    clear: () => void;
    contains (item): boolean {
    return false;
    }
    get (index: number): number {
    return 0;
}
    getSize: () => number;
    helpRevers: () => void;
    maxIndex: () => number;
    maxValue: () => number;
    minIndex: () => number;
    minValue: () => number;
    print: () => void;
    remove: (item) => void;
    removeAll: (items: number[]) => void;
    retainAll: (items: number[]) => void;
    revers: () => void;
    set: (item, idx) => void;
    sort: () => void;
    toArray: () => number[];
}




















module.exports = {LList};