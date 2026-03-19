function pramod_doing_work (worker, callback) {
    console.log("Starting the PW class");
    let work = worker;
    // Simulate work being done
    console.log("Finished the PW class");
    callback(work);
}

function callWife(work) {
    console.log(`Calling wife to say ${work} is done!`);
}

pramod_doing_work("PW class", callWife);