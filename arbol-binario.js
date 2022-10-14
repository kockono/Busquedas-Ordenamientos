class Node {

    constructor(value) {
        this.right = null;
        this.left  = null;
        this.value = value;

    } 

    add(value) {
        if (value < this.value) {
            this.addToTheLeft(value);
        } else {
            this.addToTheRight(value);
        }
    }

    addToTheRight(value) {
        if(this.right) {
            this.left.add(value);
        } else {
            this.left = new Node(value);
        }
    }

    addToTheLeft(value) {
        if (this.left) {
            this.left.add(value);
        } else {
            this.right = new Node(value);
        }
    }
}

const head = new Node(5);
console.log(head.add(15));
