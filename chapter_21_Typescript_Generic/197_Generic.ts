function getString(name: string): string {
    return "Amit";
}
getString("pramod");
// getFirstResult(123); // Cannot use a number where a string is expected


function getFirstResults<T>(results: T[]): T { // T is datatype which can be replaced by any type when the function is called
    return results[0]!;
}

let firstCode = getFirstResults<number>([200, 404, 500]);
let firstTest = getFirstResults<string>(["Login", "Signup", "Cart"]);


console.log("First code:", firstCode);
console.log("First test:", firstTest);