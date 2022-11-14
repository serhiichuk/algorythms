class QuickFind {
    constructor(size) {
        this.root = Array.from({ length: size }, (v, n) => n);
    }
    union(a, b) {
        const rootA = this.root[a];
        const rootB = this.root[b];
        if (rootA !== rootB) {
            this.root.forEach((root, vertex) => {
                if (root === rootB) {
                    this.root[vertex] = rootA;
                }
            });
        }
    }
    findRoot(vertex) {
        return this.root[vertex];
    }
    connected(a, b) {
        return this.findRoot(a) === this.findRoot(b);
    }
}
const qf = new QuickFind(10);
// 1-2-5-6-7 3-8-9 4
qf.union(1, 2);
qf.union(2, 5);
qf.union(5, 6);
qf.union(6, 7);
qf.union(3, 8);
qf.union(8, 9);
console.log(qf.connected(1, 5)); // true
console.log(qf.connected(5, 7)); // true
console.log(qf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
qf.union(7, 3);
console.log(qf.connected(8, 6)); // true
console.log(qf.root);
// 1-2-5-6-7 3-8-9-4
// [0][1][1][3][3][1][1][1][3][3]
// 1-2-5-6-7-3-8-9 4
// [0][1][1][1][4][1][1][1][1][1]


class QuickUnion {
    constructor(size) {
        this.parent = Array.from({ length: size }, (v, n) => n);
    }
    union(a, b) {
        this.parent[b] = a;
    }
    findParent(vertex) {
        return this.parent[vertex];
    }
    findRoot(vertex) {
        return vertex === this.findParent(vertex)
            ? vertex
            : this.findRoot(this.findParent(vertex));
    }
    connected(a, b) {
        return this.findRoot(a) === this.findRoot(b);
    }
}
const qu = new QuickUnion(10);
// 1-2-5-6-7 3-8-9 4
qu.union(1, 2);
qu.union(2, 5);
qu.union(5, 6);
qu.union(6, 7);
qu.union(3, 8);
qu.union(8, 9);
console.log(qu.connected(1, 5)); // true
console.log(qu.connected(5, 7)); // true
console.log(qu.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
qu.union(7, 3);
console.log(qu.connected(8, 6)); // true
console.log(qu.parent);
// 1-2-5-6-7 3-8-9-4
// [0][1][1][3][3][1][1][1][3][3]
// 1-2-5-6-7-3-8-9 4
// [0][1][1][1][4][1][1][1][1][1]
