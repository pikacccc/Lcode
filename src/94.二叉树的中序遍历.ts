import { TreeNode } from "./DataDefine";

class Node {
    val: TreeNode;
    next: Node | null;

    rightT: boolean = false;
    leftT: boolean = false;
    constructor(val: TreeNode, next: Node | null = null) {
        this.val = val;
        this.next = next;
    }
}

function inorderTraversal(root: TreeNode | null): number[] {

    // let res: number[] = [];

    // const midTraverse = (node: TreeNode | null) => {
    //     if (node == null) return;
    //     if (node.left != null) midTraverse(node.left);
    //     res.push(node.val);
    //     if (node.right != null) midTraverse(node.right);
    // }

    // midTraverse(root);
    // return res;

    const res: number[] = [];
    let p: Node | null = root == null ? null : new Node(root);

    while (p != null) {
        // 第一次到达节点时，先尝试遍历左子树。
        if (!p.leftT) {
            p.leftT = true;
            if (p.val.left != null) {
                p = new Node(p.val.left, p);
                continue;
            }
        }

        // 左子树遍历完后访问当前节点，再尝试遍历右子树。
        if (!p.rightT) {
            res.push(p.val.val);
            p.rightT = true;
            if (p.val.right != null) {
                p = new Node(p.val.right, p);
                continue;
            }
        }

        // 左、根、右均处理完毕，回到父节点。
        p = p.next;
    }

    return res;
};
// @lc code=end

