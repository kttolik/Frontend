import {IList} from './types';

export class AList implements IList {
    private array: number [];
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

    remove(item: number): void {
        const oldArray = this.array;
        this.array = [];
        this.size = 0;
        let returnValue;

        for (let i = 0; i < oldArray.length; i++) {
            const element = oldArray[i];
            if (element !== item) {
                this.add(element);
            } else {
                returnValue = element;
            }
        }
        return returnValue;
    }

    removeAll(items: number[]): void {
        for (let i = 0; i < this.array.length; i++) {
            let remove = true;
            for (let j = 0; j < items.length; j++) {
                if (this.array[i] === items[j]) {
                    remove = false;
                    break;
                }
            }
            if (!remove) {
                this.array[i] = undefined;
                this.size--;
            }
        }
    }

    retainAll(items: number[]): void {
        const preArr = this.array;
        this.array = [];
        this.size = 0;

        for (let i = 0; i < preArr.length; i++) {
            const item = preArr[i];
            for (let j = 0; j < items.length; j++) {
                const insItem = items[j];
                if (item === insItem) {
                    this.add(item);
                    break;
                }
            }
        }
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

    sort(): number[] {
    let array = this.array;
        for (let n = 0; n < array.length; n++) {
            for (let i = 0; i < array.length - 1 - n; i++) {
                if (array[i] > array[i + 1]) {
                    const bubbl = array[i]
                    array[i] = array[i + 1]
                    array[i + 1] = bubbl
                }
            }
        }
        return array
    }

    toArray(): number[] {
        return this.array;
    }
}

module.exports = {AList};