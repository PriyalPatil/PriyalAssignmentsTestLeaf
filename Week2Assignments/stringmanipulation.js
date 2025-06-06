//Example 1
let s = "Hello World";
console.log("The first String is " + s);

let sSlice = s.slice(6,11);
console.log(`The last word is "${sSlice}" with length ${sSlice.length}`);

//Example 2
let s1= "fly me to the moon"
let s1Trim = s1.trim(" ");
console.log("Trimmed word- " +s1Trim);

let s1Split = s1Trim.split(" ");
console.log("Split word- " +s1Split);

const lastWord = s1Split[s1Split.length -1];
console.log(`The last word is "${lastWord}" with length ${lastWord.length}`);

//Anagram check

function anagrams(str1, str2) {
    
    //Convert to lowercase and remove spaces
    let str1Lower = str1.toLowerCase().replace(/\s+/g, '');
    let str2Lower = str2.toLowerCase().replace(/\s+/g, '');

// Sort the string
    let sortStr1 = str1Lower.split('').sort().join('');
    let sortStr2 = str2Lower.split('').sort().join('');

// Compare Sorted Strings

let anagrams1 = sortStr1 === sortStr2;
 return anagrams1;

}
 console.log("Anagram check");
 
console.log(anagrams("listen", "silent"));
console.log(anagrams("hello", "world"));


