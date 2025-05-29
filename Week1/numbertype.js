//const { log } = require("node:console");

let number= 0;
function numberType(number)
{
if(number > 0)
{
    console.log("Number " + number + " is a Positive number");
    }
    else if(number < 0)
    {
        console.log("Number " + number + " is a negative number");
        }
        else {
            console.log("Number " + number + " is Netral number");
            
        }

}
numberType(number);