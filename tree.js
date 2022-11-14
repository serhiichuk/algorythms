const assert = require('assert');

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function insert(root, data) {
    const val = root.val;

    if (data < val) {
        if (root.left) {
            insert(root.left, data);
        } else {
            root.left = new TreeNode(data);
        }
    }

    if (data > val) {
        if (root.right) {
            insert(root.right, data);
        } else {
            root.right = new TreeNode(data);
        }
    }
}

function preOrder(root) {
    const res = [];
    const stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            res.push(curr.val);
            curr = curr.left;
        }

        curr = stack.pop()
        curr = curr.right;
    }

    return res.join(' ');
}

function postOrder(root) {
    const res = [];
    const stack = [root];
    let prev;

    while (stack.length) {
        const curr = stack[stack.length - 1];

        if (
            (curr.right || curr.left)
            && (curr.right !== prev && curr.left !== prev)
        ) {
            if (curr.right) stack.push(curr.right);
            if (curr.left) stack.push(curr.left);
        } else {
            res.push(curr.val);
            prev = stack.pop();
        }
    }

    return res.join(' ');
}

function inOrder(root) {
    const res = [];
    const stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }

    return res.join(' ')
}

function getHeightRec(root) {
    const helper = (node, h) => {
        if (!node) return h;

        const leftH = helper(node.left, h + 1);
        const rightH = helper(node.right, h + 1);

        return leftH > rightH ? leftH : rightH;
    }

    return helper(root, -1);
}

function getHeight(root) {
    const stack = [];
    curr = root;

    let leftH = 0;
    let rightH = 0;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);

            if (leftH > rightH) {
                curr = curr.left;
                leftH++
            } else {
                curr = curr.right;
                rightH++
            }

        }

        curr = stack.pop();
        curr = leftH > rightH ? curr.left : curr.right;
    }

    return leftH > rightH ? leftH : rightH;
}

function main() {
    //  1
    //   \
    //    2
    //     \
    //      5
    //     /  \
    //    3    6
    //     \
    //      4
    const rootVal = 1;
    const values = '2 5 3 6 4'.split(' ');
    const root = new TreeNode(rootVal);

    values.forEach(val => insert(root, val));

    console.log('%o', root);

    assert.strictEqual(preOrder(root), '1 2 5 3 4 6', '%o');
    assert.strictEqual(postOrder(root), '4 3 6 5 2 1', '%o');
    assert.strictEqual(inOrder(root), '1 2 3 4 5 6', '%o');
    // assert.strictEqual(getHeight(root), 5, '%o');
    // assert.strictEqual(getHeightRec(root), 3, '%o');

    console.log('All fine!');
}

main()