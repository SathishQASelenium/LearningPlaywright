interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}


function logBug(bug: BugReport): void {
    console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step: string, i: number) {
        console.log("  " + (i + 1) + ". " + step);
    })
}

logBug({
    id: 101,
    title: "VWO Login not working",
    severity: "HIGH",
    stepsToReproduce: ["Step 1: Open app.vwo.com", "Step 2: Enter Invalid credentials", "Step 3: Validate error message is shown"]
});

logBug({
    id: 102,
    title: "VWO Login not working with arabic characters",
    severity: "HIGH",
    stepsToReproduce: [
        "Step 1: Open app.vwo.com",
        "Step 2: Enter Invalid credentials",
        "Step 3: Validate error message is shown"
    ]
});