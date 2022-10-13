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

    addToTheRight() {
        if(this.right) {
            this.left.add(value);
        } else {
            this.left = new Node(value);
        }
    }

    addToTheLeft() {
        if (this.left) {
            this.left.add(value);
        } else {
            this.right = new Node(value);
        }
    }
}

console.log(new Node(15))
