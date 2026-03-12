// Normal Function
// if (ourStatusCode >= 200 && ourStatusCode < 300) 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
    else {
        console.log("Request is not fine!")
    }
}

// Function with Expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
        else {
        console.log("Request is not fine!")
    }
}

// Function with Arrow
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }   else {
        console.log("Request is not fine!");
    }
}


validateStatusCode(200);
validateStatusCode_Exp(400);
validateStatusCode_Arrow(201);