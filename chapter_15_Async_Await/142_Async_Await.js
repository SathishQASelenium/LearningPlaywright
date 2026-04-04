// Sample code using promises
getToken()
    .then(function (token) {
        return getUser(token);
    })
    .then(function (user) {
        console.log(user);
    });

// Sample code using async/await
async function run() {
    let token = await getToken();
    let user = await getUser();
}