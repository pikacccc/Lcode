export type AVLComparator<T> = (left: T, right: T) => number;

class AVLNode<T> {
    value: T;
    left: AVLNode<T> | null;
    right: AVLNode<T> | null;
    height: number;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export class AVLTree<T> {
    root: AVLNode<T> | null;
    private readonly comparator: AVLComparator<T>;

    constructor(comparator?: AVLComparator<T>) {
        this.root = null;
        this.comparator = comparator ?? this.defaultCompare;
    }

    Insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    Delete(value: T): void {
        this.root = this.deleteNode(this.root, value);
    }

    Search(value: T): boolean {
        let current = this.root;

        while (current !== null) {
            const compareResult = this.compare(value, current.value);
            if (compareResult === 0) {
                return true;
            }
            current = compareResult < 0 ? current.left : current.right;
        }

        return false;
    }

    insertNode(node: AVLNode<T> | null, value: T): AVLNode<T> {
        if (node === null) {
            return new AVLNode<T>(value);
        }

        const compareResult = this.compare(value, node.value);
        if (compareResult < 0) {
            node.left = this.insertNode(node.left, value);
        } else if (compareResult > 0) {
            node.right = this.insertNode(node.right, value);
        } else {
            return node;
        }

        return this.BalanceTree(node);
    }

    private deleteNode(node: AVLNode<T> | null, value: T): AVLNode<T> | null {
        if (node === null) {
            return null;
        }

        const compareResult = this.compare(value, node.value);
        if (compareResult < 0) {
            node.left = this.deleteNode(node.left, value);
        } else if (compareResult > 0) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // 没有子节点或只有一个子节点
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            // 有两个子节点：使用右子树的最小节点替换当前节点
            const successor = this.getMinNode(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
        }

        return this.BalanceTree(node);
    }

    private getMinNode(node: AVLNode<T>): AVLNode<T> {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    private compare(left: T, right: T): number {
        const result = this.comparator(left, right);
        if (!Number.isFinite(result)) {
            throw new TypeError("比较方法必须返回一个有限数字");
        }
        return result < 0 ? -1 : result > 0 ? 1 : 0;
    }

    private defaultCompare(left: T, right: T): number {
        if (Object.is(left, right)) {
            return 0;
        }

        if (left === null || left === undefined) {
            return -1;
        }
        if (right === null || right === undefined) {
            return 1;
        }

        if (left instanceof Date && right instanceof Date) {
            const leftTime = left.getTime();
            const rightTime = right.getTime();
            if (leftTime === rightTime) {
                return 0;
            }
            return leftTime < rightTime ? -1 : 1;
        }

        const leftType = typeof left;
        const rightType = typeof right;
        const comparableTypes = ["number", "string", "bigint", "boolean"];

        if (leftType === rightType && comparableTypes.includes(leftType)) {
            if ((left as any) < (right as any)) {
                return -1;
            }
            if ((left as any) > (right as any)) {
                return 1;
            }
        }

        throw new TypeError("该类型无法默认比较，请在创建 AVLTree 时传入比较方法");
    }

    BalanceTree(node: AVLNode<T>): AVLNode<T> {
        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        // 左子树过高：LL 或 LR
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left!);
            }
            return this.rotateRight(node);
        }

        // 右子树过高：RR 或 RL
        if (balanceFactor < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right!);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    private getHeight(node: AVLNode<T> | null): number {
        return node?.height ?? 0;
    }

    private updateHeight(node: AVLNode<T>): void {
        node.height = Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right)
        ) + 1;
    }

    private getBalanceFactor(node: AVLNode<T> | null): number {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    private rotateRight(node: AVLNode<T>): AVLNode<T> {
        const newRoot = node.left!;
        const transferredSubtree = newRoot.right;

        newRoot.right = node;
        node.left = transferredSubtree;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    private rotateLeft(node: AVLNode<T>): AVLNode<T> {
        const newRoot = node.right!;
        const transferredSubtree = newRoot.left;

        newRoot.left = node;
        node.right = transferredSubtree;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }
}
