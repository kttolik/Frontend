import {IList} from './types';

export class AList implements IList {
    private readonly array: number [];

    private size: number;

    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(item): void {
        this.array[this.size] = item
        this.size++
    }

    clear(): void {
        this.array.length = 0;
    }

    contains(item): boolean {
       for ( const itemElements of this.array) {
           if (item === itemElements) {
               return true
           }
       }
       return false
    }

    get(idx): void {

    }

    getSize(): number {
        return 0;
    }

    helpRevers(): void {

    }

    maxIndex(): number {
        return 0;
    }

    maxValue(): number {
        return 0;
    }

    minIndex(): number {
        return 0;
    }

    minValue(): number {
        return 0;
    }

    print(): void {

    }

    remove(item): void {

    }

    removeAll(items: number[]): void {

    }

    retainAll(items: number[]): void {

    }

    revers(): void {

    }

    set(item, idx): void {

    }

    sort(): void {

    }

    toArray(): number[] {
        return [];
    }
}