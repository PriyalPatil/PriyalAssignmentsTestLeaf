const { log } = require("node:console")

let browserName = "edge"
function launchBrowser(browserName)
{
    if(browserName === "Chrome")
    {
        console.log("Chrome browser is supported")     
    }
    else 
    {
        console.log(browserName + " browser is not supported");
    }
}

let testType = "smoke";
function runTests(testType)
{
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
        console.log("Running sanity tests");
            break; 
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Smoke is the default type");
    }
}

launchBrowser(browserName);
runTests(testType)