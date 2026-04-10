// Method Overriding - Child class can provide the specific implementation of the method which is already provided by its parent class. This is known as method overriding in JavaScript.
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setup(); // whoever object is present, it will call that. 