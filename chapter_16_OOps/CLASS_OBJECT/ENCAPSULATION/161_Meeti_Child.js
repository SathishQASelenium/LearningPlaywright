class Person {
    // Hide you childs by making them private using # before the variable name. This is called encapsulation.
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1; // will return the name of child1
    }

    setChild1(changed_name) {
        this.#child1 = changed_name; // will change the name of child1 to the new name passed as an argument
    }


}

let p = new Person("Meeti", "Aaryav", "Penny");

console.log(`p.name is ${p.name}`);
// console.log(p.#child1); // This will give an error because #child1 is private and cannot be accessed directly outside the class. We have to use the getter method to access it.
console.log(`p.getChild1() is ${p.getChild1()}`);
p.setChild1("Pratham");
console.log(`p.getChild1() after changed is ${p.getChild1()}`);