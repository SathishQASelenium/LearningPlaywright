class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {

    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest(); // setup from BaseTest is overridden by LoginTest
let apitest = new APITest(); // setup from BaseTest is overridden by APITest, so it will not open browser, instead it will print "No Browser!"
test.setup();
apitest.setup();