let statuscode = 400;

if (statuscode === 200) {
    console.log("OK");
} else if (statuscode === 201) {
    console.log("Created");
} else if (statuscode === 400) {
    console.log("Bad Request");
} else if (statuscode === 401) {
    console.log("Unauthorized");
} else if (statuscode === 404) {
    console.log("Not Found");
} else if (statuscode === 500) {
    console.log("Internal Server Error");
} else {
    console.log("Unknown Status Code");
}