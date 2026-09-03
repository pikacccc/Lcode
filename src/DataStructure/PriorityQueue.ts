export type PriorityComparator<T> = (left: T, right: T) => number;

/**
 * 使用二叉堆实现的泛型优先队列。
 * comparator(left, right) < 0 表示 left 的优先级更高。
 */
export class PriorityQueue<T> {
    private readonly heap: T[] = [];
    private readonly comparator: PriorityComparator<T>;

    constructor(comparator: PriorityComparator<T>) {
        this.comparator = comparator;
    }

    get size(): number {
        return this.heap.length;
    }

    get isEmpty(): boolean {
        return this.heap.length === 0;
    }

    Enqueue(value: T): void {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }

    Dequeue(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.siftDown(0);

        return top;
    }

    Peek(): T | undefined {
        return this.heap[0];
    }

    Clear(): void {
        this.heap.length = 0;
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private siftDown(index: number): void {
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let highestPriorityIndex = index;

            if (
                leftIndex < this.heap.length &&
                this.compare(
                    this.heap[leftIndex],
                    this.heap[highestPriorityIndex]
                ) < 0
            ) {
                highestPriorityIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.compare(
                    this.heap[rightIndex],
                    this.heap[highestPriorityIndex]
                ) < 0
            ) {
                highestPriorityIndex = rightIndex;
            }

            if (highestPriorityIndex === index) {
                break;
            }

            this.swap(index, highestPriorityIndex);
            index = highestPriorityIndex;
        }
    }

    private compare(left: T, right: T): number {
        const result = this.comparator(left, right);
        if (!Number.isFinite(result)) {
            throw new TypeError("比较方法必须返回一个有限数字");
        }
        return result;
    }

    private swap(leftIndex: number, rightIndex: number): void {
        [this.heap[leftIndex], this.heap[rightIndex]] =
            [this.heap[rightIndex], this.heap[leftIndex]];
    }
}
