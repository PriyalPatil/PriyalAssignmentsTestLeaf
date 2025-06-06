// String reverse

let courseName  = "Playwright"

function reverse() {

    let chars = courseName.split("");
    console.log(chars);
    
    let reversed ="";
    for(let i=chars.length - 1; i >= 0; i--)
    {
        reversed = reversed + chars[i];
    }
    return reversed;
 
}

console.log(reverse());

//Checking if the string is palindrome

function palindrome(str) {
    let reverseString = reverse(str);
    if(str === reverseString)
    {
        console.log("The string is palindrome");
        return true
    }
    else{
        console.log("The String is not Palindrome");
        return false
    }
}
palindrome(courseName);


/* let courseName1 = "Contentstack";

let reverse1 = courseName1.split("").reverse().join("");
console.log(reverse1); */



