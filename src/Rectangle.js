class Rectangle {

    height = 0;
    width = 0;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }

    toString() {
        return "Rectangle - area: " + this.calcArea();
    }
}

export default Rectangle;
