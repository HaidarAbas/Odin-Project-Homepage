// REMINDER!! appened script:deploy in package.json with branch name

const checkMode = function() {
    if (process.env.NODE_ENV === "development") {
        console.log("I am in development");
    }
    else if (process.env.NODE_ENV === "production") {
        console.log("I am in production");
    }
    else {
        console.log(process.env.NODE_ENV);
    }
}

checkMode();