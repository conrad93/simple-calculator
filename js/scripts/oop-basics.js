class Course {
    #price; // private

    get price(){
        return "$" + this.#price;
    }

    set price(value){
        if(value < 0) throw "Invalid price!";
        this.#price = value;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.#price = price;
    }

    worth(){
        return this.length / this.#price;
    }

    summary(){
        return (`
            Title: ${this.title} \n
            Get ${this.length} for the price of ${this.price}
        `);
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, num){
        super(title, length, price);
        this.numOfExercise = num;
    }
}

class TheoreticalCourse extends Course {
    publish(){
        console.log("Publishing...");
    }
}

let course1 = new Course("JS", 100, 10);
let course2 = new Course("Python", 150, 15);
let course3 = new PracticalCourse("Angular", 120, 12, 6);
let course4 = new TheoreticalCourse("Node.js", 120, 12);

course4.publish()
console.log(course4.summary())