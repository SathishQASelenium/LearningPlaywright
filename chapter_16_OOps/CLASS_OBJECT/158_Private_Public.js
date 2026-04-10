// Private Fields (#) — Hidden Data
// PUBLIC Fields 
class Credentials {
    #apiKey; // private field
    user; // public field

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key; // private field, only accessible within the class
    }
    // Custom made fuction by us
    pramodgetAuthHeader() { // public method to access private field value of #apiKey
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); //undefined
// console.log(cred.#apiKey); //error

console.log(cred.pramodgetAuthHeader());

// cred.apiKey is undefined
// (it doesn't exist). 
// cred.#apiKey would throw a SyntaxError. 
// The ONLY way to access it is through the public method getAuthHeader()