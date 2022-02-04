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

    get(idx): number {
        return this.array[idx];

    }

    getSize(): number {
        return this.size;
    }

    helpRevers(): void {

    }

    maxIndex(): number {
        let maxItem = this.array[0];
        let maxItemIndex = 0;

        for(let i = 0; i < this.array.length; i++) {
            if (this.array[i] > maxItem)
            { maxItem = this.array[i];
                maxItemIndex = i;
            }
        }
        return maxItemIndex;
    }

    maxValue(): number {
        let maxItem = this.array[0];
        for(let i = 0; i < this.array.length; i++) {
            if (this.array[i] > maxItem)
            { maxItem = this.array[i];
            }
        }
        return maxItem;
    }

    minIndex(): number {
        let minItem = this.array[0];
        let minItemIndex = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] < minItem) {
                minItem = this.array[i];
                minItemIndex = i;
            }
        }
        return minItemIndex;
    }

    minValue(): number {
        let minItem = this.array[0];
        for(let i = 0; i < this.array.length; i++) {
            if (this.array[i] < minItem) {
                minItem = this.array[i];
            }
        }
        return minItem;

    }

    print(): void {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i]);
        }
    }

    remove(item): void {

    }

    removeAll(items: number[]): void {

    }

    retainAll(items: number[]): void {

    }

    revers(): void {
        let reversArr = [];
        reversArr.length = this.size;
        for (let i = 0; i < this.size; i++) {
            reversArr[reversArr.length - i - 1] = this.array[i];
        }
        reversArr = this.array ;
    }

    set(item, idx): void {

    }

    sort(): void {

    }

    toArray(): number[] {
        return this.array;
    }
}

module.exports = {AList};